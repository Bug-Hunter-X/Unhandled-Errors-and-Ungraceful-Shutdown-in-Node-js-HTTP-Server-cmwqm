const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', err => {
  console.error('Server error:', err);
  process.exit(1);
});

// Start the server
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed gracefully');
    process.exit(0);
  });
});
