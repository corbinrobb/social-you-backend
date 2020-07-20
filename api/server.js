const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');

const server = express();

server.use(express.json())
server.use(cors());
server.use(helmet());

server.use('/api/auth', authRouter);


module.exports = server;