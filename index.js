const http = require("http");
const { readFile } = require("fs/promises");

const port = 8080;

const head = {
  "Content-Type": "text/html",
};

const server = http.createServer(async (req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const data = await readFile("./index.html", "utf8");
    res.writeHead(200, head);
    res.write(data);
    return res.end();
  }
  if (req.url === "/about.html") {
    const data = await readFile("./about.html", "utf8");
    res.writeHead(200, head);
    res.write(data);
    return res.end();
  }
  if (req.url === "/contact-me.html") {
    const data = await readFile("./contact-me.html", "utf8");
    res.writeHead(200, head);
    res.write(data);
    return res.end();
  }
  const data = await readFile("./404.html", "utf8");
  res.writeHead(200, head);
  res.write(data);
  return res.end();
});

server.listen(port, (err) => {
  if (err) return console.log("Error porting");
  return console.log("Success port at http://localhost:8080");
});
