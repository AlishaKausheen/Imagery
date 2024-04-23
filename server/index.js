import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import express from 'express';
import PostRouter from './routes/Posts.js';

dotenv.config();

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

app.use("/api/post", PostRouter);

//Default get
app.get("/", async (req, res) => {
    res.status(200).json({
        message: "HEllo guyzz",
    });
    
});

//function to connect to mongodb
const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log("MONGODB connected"))
        .catch((err) => {
            console.error('Failed to connect to DB ');
            console.error(err);
    })
}

//server start
const startServer = async () => {
    try { 
        connectDB();
        app.listen(8080, ()=> console.log("Server started on 8080"))
    }
    catch(error){
        console.log(error);
    }
}

startServer();