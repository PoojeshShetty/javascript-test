import '@babel/polyfill';
import http from 'http';

function requestHandler(req, res) {
  res.writeHead(200, { 'content-Type': 'text/plain' });
  res.end('hello, world this is pj');
};
const server = http.createServer(requestHandler);
server.listen(8082);
