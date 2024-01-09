const { Server } = require("socket.io");
const express = require("express");
const http = require('http');
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT,
        methods: ["GET", "POST"],
    },
});



server.listen(process.env.PORT , () => {
    console.log("listening on *:3001");
});


