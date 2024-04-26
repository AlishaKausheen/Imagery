import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration } from "openai";

dotenv.config();

//Set up Open AI API Key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

