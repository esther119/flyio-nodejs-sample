const express = require("express");
const app = express();
const port = process.env.PORT || 8080; // Fly.io provides the PORT environment variable

app.get("/", (req, res) => {
  res.send("Hello World from Fly.io!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
