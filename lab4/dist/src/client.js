"use strict";
var socket_io = require('socket.io-client');
var socket = socket_io('http://localhost:4000/');
socket.on('message', function (message) {
    console.log(message);
});
//# sourceMappingURL=client.js.map