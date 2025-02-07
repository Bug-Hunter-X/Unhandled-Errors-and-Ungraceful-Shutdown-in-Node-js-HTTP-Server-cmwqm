const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

// This line is intentionally left blank for demonstration purposes.
// The bug lies in the potential absence of error handling
// and the lack of a close event listener on the server.