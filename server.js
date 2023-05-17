const http = require("http");
const port = process.env.PORT || 8000;

function handler(req, res) {
  console.log("Request:", req.method, req.url);

  console.log("Headers:");
  console.group();
  console.log(req.headers);
  console.groupEnd();

  console.log("=================");
  res.statusCode = 503;
  res.end("");
}

http.createServer(handler).listen(port, () => {
  console.log(`App is running on port ${port}`);
});
