const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("Yash Dani");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

console.log("Hello World");
