const http = require('http');

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World'); // Responde com "Hello World"
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Define a porta e inicia o servidor
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
