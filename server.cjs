const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const preferredPort = Number(process.env.PORT || 5173);
const root = path.join(__dirname, "dist");

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

const server = http.createServer((request, response) => {
    const urlPath = decodeURIComponent(request.url.split("?")[0]);
    const safePath = path.normalize(urlPath).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
    let filePath = path.join(root, safePath);

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    if (urlPath === "/" || !path.extname(filePath)) {
      filePath = path.join(root, "index.html");
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
      });
      response.end(data);
    });
  });

function listen(port) {
  server.listen(port, "127.0.0.1", () => {
    console.log(`Puerto de Calpe Sostenible: http://127.0.0.1:${port}`);
  });
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    const nextPort = Number(error.port || preferredPort) + 1;
    console.log(`El puerto ${error.port || preferredPort} esta ocupado. Probando http://127.0.0.1:${nextPort}`);
    listen(nextPort);
    return;
  }

  throw error;
});

listen(preferredPort);
