const http = require("http"); // Import Node.js core module

const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World!");
    res.end();
  }
  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }

  res.write("Hello World!");
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`, `http://localhost:${port}`);
});
