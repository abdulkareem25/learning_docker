import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

export default app;