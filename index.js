import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log(req.query);
  res.send();
});

app.listen(8000, () => console.log("api started"));
