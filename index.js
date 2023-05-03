const express = require("express");
const app = express();
const cors = require("cors");
port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const traditionalItems = require("./data/traditionalItems.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/traditional", (req, res) => {
  res.send(traditionalItems);
});
app.listen(port, () => {
  console.log(`the app is listening on port${port}`);
});
