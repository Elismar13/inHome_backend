const socketio = require('socket.io');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server, {
        cors: {
            origin: process.env.INHOME_URL,
            methods: ["GET", "POST"]
          }
    });

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);
    });
}