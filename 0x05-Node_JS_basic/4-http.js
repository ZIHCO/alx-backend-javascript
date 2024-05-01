const { createServer } = require('node:http');

const host = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton school!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
