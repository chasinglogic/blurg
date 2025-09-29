const http = require("http");
const port = process.env.PORT || 8000;
const statusCode = process.env.STATUS_CODE || 200;
const respondWithHeaders =
  (process.env.RESPOND_WITH_HEADERS || "true") === "true";

function handler(req, res) {
  const isHealthCheck = req.url.startsWith("/health");
  res.statusCode = isHealthCheck ? 200 : statusCode;

  console.log("Request:", req.method, req.url);

  const info = {
    request: {
      method: req.method,
      url: req.url,
    },
    headers: req.headers,
  };

  console.log(info);
  console.log("=================");

  if (respondWithHeaders) {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(info));
  } else {
    res.end("done");
  }
}

http.createServer(handler).listen(port, () => {
  console.log(`App is running on port ${port}`);
});
