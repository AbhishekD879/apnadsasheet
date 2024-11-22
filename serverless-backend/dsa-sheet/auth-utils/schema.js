import {pgTable,uuid,
    varchar,
    timestamp,
    text,} from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    id: uuid("id").primaryKey(),
    firstName: varchar("first_name", { length: 256 }),
    lastName: varchar("last_name", { length: 256 }),
    email: varchar("email", { length: 256 }).notNull().unique(),
    hashedPassword: varchar("hashed_password", { length: 256 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    profilePicture: varchar("profile_picture", { length: 512 }), // Profile picture URL
    lastLogin: timestamp("last_login"), // Last login timestamp
});

export const sessionTable = pgTable("session", {
    id: text("id").primaryKey(),
    userId: uuid("user_id")
        .notNull()
        .references(() => userTable.id, { onDelete: "cascade" }),
    expiresAt: timestamp("expires_at", {
        withTimezone: true,
        mode: "date",
    }).notNull(),
});

export const problemTable = pgTable("problem",{
    id: uuid("id").primaryKey(),
    bookmarkedProblem: varchar("bookmarked_problem", { length: 512 }).array().default([]),
    completedProblem: varchar("completed_problem",{length:512}).array().default([]),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
    userId: uuid("user_id")
       .references(() => userTable.id, { onDelete: "cascade" }),
})