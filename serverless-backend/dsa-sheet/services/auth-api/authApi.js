import express from "express";
import db from "../../auth-utils/db.js";
import { problemTable, userTable } from "../../auth-utils/schema.js";
import { eq } from "drizzle-orm";
import {
  createSession,
  generateSessionToken,
  validateSessionToken,
} from "../../auth-utils/index.js";
import { v4 } from "uuid";
import bcrypt from "bcryptjs";
const router = express.Router();

const matchPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Body", req.body);
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }
    // Perform authentication logic here
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .limit(1);
    console.log("User: ", user);
    if (!user || !user.hashedPassword) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isPasswordValid = await matchPassword(password, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
    const token = generateSessionToken();
    const session = await createSession(token, user.id);
    // res.appendHeader('Access-Control-Allow-Credentials', 'true');
    // res.appendHeader('Access-Control-Allow-Origin','http://localhost:5173')
    // Set the session token as a cookie
    res.cookie("auth_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      maxAge: session.expiresAt, // 30 days
      sameSite: "none",
      // domain: req.headers.origin || 'Unknown'
    });

    console.log("Headers", req.headers.origin);

    res.status(200).json({
      token: token,
      message: "LOGIN_SUCCESS",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  console.log("Email: ", email);
  console.log("Password: ", password);
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }
    // Check if user already exists
    const existingUser = await db
      .select()
      .from(userTable)
      .where(eq(userTable.email, email))
      .limit(1)[0];
    console.log("Existing User: ", existingUser);
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Perform registration logic here
    const hashedPassword = await hashPassword(password);
    console.log("Hashed Password: ", hashedPassword);
    const userId = v4();
    const user = {
      id: userId,
      firstName: "",
      lastName: "",
      email,
      hashedPassword,
      profilePicture: `https://robohash.org/${userId}`,
    };
    console.log("Hashed Password: ", user);
    const createdUser = await db.insert(userTable).values(user);
    console.log("Created User: ", createdUser);
    // Set the session token as a cookie
    const token = generateSessionToken();
    const session = await createSession(token, user.id);
    res.cookie("auth_session", token, {
      httpOnly: true,
      secure: false, // Use secure cookies in production
      maxAge: session.expiresAt, // 30 days
      sameSite: "None",
    });

    return res.status(201).json({
      token: token,
      message: "USER_CREATED",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        profilePicture: user.profilePicture,
      },
    });
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("auth_session");
  res.status(200).json({
    message: "LOGOUT_SUCCESS",
  });
});

router.get("/me", async (req, res) => {
  const token = req.header("Authorization");
  console.log("Token: ", token);
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const { session, user } = await validateSessionToken(token);
  console.log("Session: ", session);
  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  console.log("User: ", user);
  return res.status(200).json({
    message: "USER_FOUND",
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
    },
  });
});

router.get("/problems/:userId", async (req, res) => {
  const userId = req.params.userId;
  const problems = await db
    .select()
    .from(problemTable)
    .where(eq(problemTable.userId, userId))
    .limit(1);
  console.log("Problems: ", problems[0]);
  if (!problems[0]) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  return res.status(200).json({
    message: "PROBLEMS_FOUND",
    bookmarkedProblem: problems[0].bookmarkedProblem,
    completedProblem: problems[0].completedProblem,
  });
});

router.post("/problems/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { bookmarkedProblem, completedProblem } = req.body;
  console.log("Bookmarked Problem: ", bookmarkedProblem);
  console.log("Completed Problem: ", completedProblem);
  if (!bookmarkedProblem || !completedProblem) {
    return res.status(400).json({
      message: "Bookmarked Problem and Completed Problem are required",
    });
  }

  try {
    // Check if a problem entry for the user already exists
    const existingProblem = (
      await db
        .select()
        .from(problemTable)
        .where(eq(problemTable.userId, userId))
        .limit(1)
    )[0];
    console.log("Existing Problem: ", existingProblem);
    if (existingProblem) {
      // Append new problems to existing ones
      const updatedBookmarkedProblem = new Set([
        ...existingProblem.bookmarkedProblem,
        ...bookmarkedProblem,
      ]);
      const updatedCompletedProblem = new Set([
        ...existingProblem.completedProblem,
        ...completedProblem,
      ]);

      // Update the existing problem entry
      await db
        .update(problemTable)
        .set({
          bookmarkedProblem: Array.from(updatedBookmarkedProblem),
          completedProblem: Array.from(updatedCompletedProblem),
          updatedAt: new Date(),
        })
        .where(eq(problemTable.userId, userId));

      return res.status(200).json({
        message: "PROBLEMS_UPDATED",
        bookmarkedProblem: Array.from(updatedBookmarkedProblem),
        completedProblem: Array.from(updatedCompletedProblem),
      });
    } else {
      // Create a new problem entry
      const problem = {
        id: v4(),
        userId,
        bookmarkedProblem,
        completedProblem,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await db.insert(problemTable).values(problem);

      return res.status(201).json({
        message: "PROBLEMS_CREATED",
        bookmarkedProblem: problem.bookmarkedProblem,
        completedProblem: problem.completedProblem,
      });
    }
  } catch (e) {
    console.error("Error handling problems:", e);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

export default router;
