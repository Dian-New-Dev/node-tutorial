// Load HTTP module:
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//Create http server:
const server = http.createServer(function (req, res) {
    //set the response http header with http status and content ype
    res.writeHead(200, { "Content-Type": "text/plain"});

    //send the response body "Hello World"
    res.end("Hello World\n");
});

//Logs when the server starts listening
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`)
});