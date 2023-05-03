const express = require("express");
const app = express();
const cors = require("cors");
port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`the app is listening on port${port}`);
});
