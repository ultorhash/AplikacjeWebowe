"use strict";
var express = require('express');
var app = express();
var port = 4000;
var webpack = require('webpack');
var config = require('../webpack.config.js');
var compiler = webpack(config);
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var socketIo = require('socket.io');
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
var server = app.listen(port, function () {
    console.log("Listening on port " + port);
});
var io = socketIo(server);
io.on('connection', function (socket) {
    socket.emit('message', "HELLLOW WOOORLD");
    console.log(socket);
    socket.broadcast.emit('message', "new user join");
    console.log("Made socket connection");
    socket.on("chatmessage", function (data) {
        console.log(data);
        socket.broadcast.emit("chatmessage", data);
    });
    socket.on('disconnect', function () {
        io.emit('message', 'user left chat');
    });
});
//console.log(io);
app.get('/', function (req, res) {
    res.json({ msg: "Łukasz Preiss" });
});
//# sourceMappingURL=server.js.map