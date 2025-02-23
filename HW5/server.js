const http = require("http");

const server = http.createServer((req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.statusCode = 401;
    res.setHeader("Content-Type", "text/plain");
    res.end("Unauthorized");
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Authorization header received");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening:${PORT}`);
});
