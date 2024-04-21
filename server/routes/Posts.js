import express from "express";
import { getAllPosts } from "../controllers/Posts";

const router = express.Router();

router.get("/", getAllPosts);

export default router;