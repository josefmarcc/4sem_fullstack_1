const http = require("http");
const DOS_Detector = require("./dosDetector");
const osInfo = require("./OS-info");

const dosDetec = new DOS_Detector();

//Register for the "DosDetected" event and console.log the url and time info.

// Register a listener
dosDetec.on("DosDetected", (arg) =>
  console.log(`DosDetected called: ${JSON.stringify(arg)}`)
);

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(osInfo));
    return res.end();
  }
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on("connection", (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
  console.log(sock.remoteAddress);
  dosDetec.TIME_BETWEEN_CALLS = 2000;
  dosDetec.addUrl(sock.remoteAddress);
});
server.listen(3000);
console.log("listening on 3000");
