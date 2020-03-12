const socketio = require('socketio');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);
    });
}