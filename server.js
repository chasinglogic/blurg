const http = require("http");
const port = process.env.PORT || 8000;
const statusCode = process.env.STATUS_CODE || 200;

function handler(req, res) {
  const isHealthCheck = req.url.startsWith("/health");
  res.statusCode = isHealthCheck ? 200 : statusCode;

  console.log("Request:", req.method, req.url);

  console.log("Headers:");
  console.group();
  console.log(req.headers);
  console.groupEnd();

  console.log("=================");
  res.end("");
}

http.createServer(handler).listen(port, () => {
  console.log(`App is running on port ${port}`);
});
