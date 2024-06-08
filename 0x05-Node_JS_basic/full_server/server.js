const express = require('express');
const router = require('./routes/index');

const server = express();

server.use('*', router);

server.listen(1245);
