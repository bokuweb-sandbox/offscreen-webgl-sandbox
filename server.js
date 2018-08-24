const finalhandler = require("finalhandler");
const http = require("http");
const serveStatic = require("serve-static");

const serve = serveStatic("./", { index: ["index.html"] });

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

console.log("open localhost:3000");
server.listen(3000);
