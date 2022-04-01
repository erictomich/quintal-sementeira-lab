// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080); 
import config from './server/config.js'
import server from './server/server.js'
import { logger } from './server/util.js'

server.listen(config.port)
.on('listening', () => logger.info(`server running at ${config.port}!!!`))