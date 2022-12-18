const express = require("express");
const app = express();
const port = 8080;
const { readFile } = require("fs/promises");

app.get("/" || "/index.html", async (req, res) => {
  res.send(await readFile("./index.html", "utf8"));
});

app.get("/about.html", async (req, res) => {
  res.send(await readFile("./about.html", "utf8"));
});

app.get("/contact-me.html", async (req, res) => {
  res.send(await readFile("./contact-me.html", "utf8"));
});

app.use(async (req, res) => {
  res.status(404).send(await readFile("./404.html", "utf8"));
});

app.listen(port, (err) => {
  if (err) Error(err);
  return console.log(`Success port listening at http://localhost:${port}`);
});
