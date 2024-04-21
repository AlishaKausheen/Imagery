//controllers are default functions that are called on every routes

import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
          
//cloudinary.config({ 
  //cloud_name: 'dftwu3ocy', 
  //api_key: '551575543784676', 
  //api_secret: 'phjLlVyu6Uwjmu5a0YLCbYquRyg' 
//});

//get all posts
export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts });
    } catch (error){
        next(createError(error.status, error?.response.data?.error?.message || error?.message))
    }
}