import express, { Request, Response } from "express";

const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/time", (req: Request, res: Response) => {
  res.json({ data: new Date().toString() });
});

app.listen(port, () => {
  console.log(`[Server]: Example app listening on port ${port}`);
});
