// Minimal static server for local preview/verification only.
// The deliverable is index.html (double-click to open) — this is not required to use it.
const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 8131;
const TYPES = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/" || p === "") p = "/index.html";
  const file = path.join(__dirname, p);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not found"); return; }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => console.log("Enigma preview on http://localhost:" + PORT));
