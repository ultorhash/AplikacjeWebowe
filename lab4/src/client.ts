const socket_io = require('socket.io-client');

const socket:any = socket_io('http://localhost:4000/');
socket.on('message', (message: any) => {
    console.log(message)
})