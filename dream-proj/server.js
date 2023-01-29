import * as dotenv from "dotenv";
//lets us access environment variables
dotenv.config();

import { Configuration, OpenAIApi } from "openai";
//creating a new configuration with the api key
const configuration = new Configuration({
  apiKey: process.env.OpenAI,
});

//initialize the openAI SDK with the configuration
const openai = new OpenAIApi(configuration);

import express from "express";
import cors from "cors";

const app = express();
//middlewares
app.use(cors());
app.use(express.json());

//endpoint
app.post("/dream", async (req, res) => {
  const prompt = req.body.prompt;
  const openAIResponse = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
  });

  const image = openAIResponse.data.data[0].url;
  res.send({ image });
});

app.listen(8080, () => console.log("Make art on http://localhost:8080/dream"));
