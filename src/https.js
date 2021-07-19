const http = require('http');

const PORT = 3000;

http
  .createServer((req, res) => {
    console.log(`New Request: ${req.url}`);
    res.write('Hello from Nodejs')
    res.end();
  })
  .listen(PORT);

console.log(`https://localhost:${PORT}`);
