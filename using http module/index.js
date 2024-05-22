const http = require("http");
const PORT = 3000;
const proxy = http.createServer(function (req, res) {
  res.end("hello world");
  console.log(res);
});
proxy.listen(PORT, function process() {
  console.log("Server started");
});
