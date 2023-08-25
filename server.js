const http = require("http");

function startServer(port, requestHandler) {
  const server = http.createServer(requestHandler);
  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = {
  startServer,
};
