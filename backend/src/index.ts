import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log('Connected to database!'));

const app = express(); //Creates an express server

app.use(express.json()); // Add a middleware that convert the body of http request to json

app.use(cors());

app.get("/test", async (request: Request, response: Response) => {
    response.json({ message: "Hello!" });
});

app.listen(7000, () => {
    console.log("server started on localhost:7000");
})
