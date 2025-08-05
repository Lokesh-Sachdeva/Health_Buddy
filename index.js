const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let aiText = "";

app.post("/receive-ai", (req, res) => {
  aiText = req.body.text || "";
  console.log("Received AI text:", aiText);
  res.status(200).send("OK");
});

app.get("/get-ai", (req, res) => {
  res.json({ text: aiText });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
