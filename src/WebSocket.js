const socketio = require('socket.io');

let io;
let connections = 0;

const setupWebSocket = (server) => {
    io = socketio(server, {
        cors: {
            origin: process.env.INHOME_URL,
            methods: ["GET", "POST"]
          }
    });

    io.on('connection', (socket) => {
        console.log(socket.id);
        console.log(socket.handshake.query);
        connections++;
    });

    io.on('disconnect', (socket) => {
        console.log(socket.id);
        console.log(socket.handshake.query);
        connections--;
    })

    return io;
}

const sendDataToAllClients = (data) => {
    io.emit('update_data', data);
}

module.exports = {
    setupWebSocket,
    sendDataToAllClients,
}