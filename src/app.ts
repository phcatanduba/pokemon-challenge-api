import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as teamControllers from "./controllers/teamControllers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", teamControllers.get);

app.post("/", teamControllers.create);

export async function init() {
  await connectDatabase();
}

export default app;
