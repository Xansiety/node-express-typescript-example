import express from "express";

const app = express();

app.use(express.json()); // middleware for parsing application/json

const PORT = 3000;

app.get("/test", (_req, res) => {
  res.status(200).send({
    message: "Hello World!",
    ok: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
