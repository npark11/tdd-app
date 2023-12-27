const express = require("express");

const PORT = 8080;

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
