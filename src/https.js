const http = require('http');

const PORT = 3000;

http
  .createServer((req, res) => {
    console.log(`New Request: ${req.url}`);
    switch (req.url) {
      case '/':
        res.write('Backend Pure Nodejs');
        break;
      case '/hola':
        res.write('<h1>Hola!</h1>');
        break;
      default:
        res.write('404');
    }
    res.end();
  })
  .listen(PORT);

console.log(`https://localhost:${PORT}`);
