const http = require("http");

module.exports = function createServer(tasks) {
  const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/tasks" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tasks));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  const port = 8080;
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};
