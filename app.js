const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App Running 🚀");
});

app.get("/secret", (req, res) => {
  res.send(`Secret: ${process.env.DB_PASSWORD}`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
