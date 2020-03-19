const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.get("/", (req,res) => {
    const MOTD = process.env.MOTD || "Welcome to Adrian's first server.";

    res.status(200).json({message: MOTD })
})

server.use('/api', apiRouter);

module.exports = server;
