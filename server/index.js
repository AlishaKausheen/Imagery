import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express from 'express';

dotenv.config;

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));


//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,
        message
    });
});

//Default get
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "HEllo guyzz",
    });
    
});