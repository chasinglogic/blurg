const http = require("http");
const port = process.env.PORT || 8000;
const statusCode = process.env.STATUS_CODE || 200;

function handler(req, res) {
  console.log("Request:", req.method, req.url);

  console.log("Headers:");
  console.group();
  console.log(req.headers);
  console.groupEnd();

  console.log("=================");
  res.statusCode = req.path.startsWith("/health") ? 200 : statusCode;
  res.end("");
}

http.createServer(handler).listen(port, () => {
  console.log(`App is running on port ${port}`);
});
