const express = require('express');
const app = express();
const port = 4000;

const webpack = require('webpack');
const config = require('../webpack.config.js');
const compiler = webpack(config);
const path = require('path');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const socketIo = require('socket.io');

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.use(webpackHotMiddleware(compiler))

let server = app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const io = socketIo(server);
io.on('connection', (socket: any) => {
    socket.emit('message', "HELLLOW WOOORLD")
    console.log(socket);
    socket.broadcast.emit('message', "new user join")
    console.log("Made socket connection");
    socket.on("chatmessage", function (data: any) {
    console.log(data)
        socket.broadcast.emit("chatmessage", data);
  });
  socket.on('disconnect', ()=>{
    io.emit('message', 'user left chat')
  });
});

//console.log(io);


app.get('/', (req: any, res: any) => {
    res.json({msg: "Łukasz Preiss"});
});