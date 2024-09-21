// Import the http module
const http = require("http");

// Define the hostname and port
const hostname = "127.0.1";
const port = 3000;

// Create a server that sends "Hello, World!" response
const server = http.createServer((req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World!\n");
  } catch {
    res.statusCode = 500;
    res.end("Internal Server Error");
    console.error("An error occurred: ", error);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
