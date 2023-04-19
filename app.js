import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is live !");
});

app.use("*", (req, res) => {
  res.status(404).send("Not Found !");
});

app.listen(port, () => {
  console.log("app is listening on port", port);
});
