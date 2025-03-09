// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();



const app: Express = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req: Request, res: Response) => {
  console.log('[Payload Received] body: ' + req.body);
  res.send("Express + TypeScript Server");
});

app.get("/unitTest", (req: Request, res: Response) => {
  console.log('[Payload Received] body: ' + req.body);
  res.status(200).json({ online: true });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});