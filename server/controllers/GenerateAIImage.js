import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

//Set up Open AI API Key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//controller to generate image

export const generateImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;

    } catch (error) {
       next(
            createError(
                error.status, error?.response.data?.error?.message || error?.message
           )
       )
  
    }
}
