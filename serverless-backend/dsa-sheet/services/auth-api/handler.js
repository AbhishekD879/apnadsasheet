import serverless from "serverless-http";
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./authApi.js"
import cors from "cors";
const app = express();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173' || '*', // You can specify allowed origins or use '*' for all
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(cookieParser());


app.use(process.env.AUTH_SERVICE_URL,authRouter);

app.get("/",(req,res)=>{
    res.json({
        "message": "Hello World From Auth Services"
    });
})

export const handler = serverless(app);