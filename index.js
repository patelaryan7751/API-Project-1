const express = require("express");
// Database
const database = require("./database");
// Initialise exoress
const booky = express();

booky.get("/", (req, res) => {
  return res.json({ books: database.books });
});
booky.listen(3000, () => {
  console.log("Server is up and runing at 3000");
});
