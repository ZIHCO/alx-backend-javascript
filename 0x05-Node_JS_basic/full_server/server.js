const express = require('express');
const router = require('../full_server/routes/index.js');

const server = express();

server.use('/', router);

server.use('/students', router);

server.use('/students/:major', router);

server.listen(1245);

export default server;
