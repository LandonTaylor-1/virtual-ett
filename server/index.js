const express = require("express");
const mongoose = require('mongoose');
const app = express()
const bodyParser = require("body-parser");
require("dotenv").config();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let pesLeftRoutes = require('./routes/pesLeftRoute');
let pesRightRoutes = require('./routes/pesRightRoute');

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(pesLeftRoutes);
app.use(pesRightRoutes);

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongodburi, {useNewUrlParser: true});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

// io.set("transports", ["xhr-polling"]); 
// io.set("polling duration", 10); 
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('User Disconnected');
  });
  socket.on('pesLeft', function(data){
    console.log('pesLeft: ' + data);
    io.sockets.emit('pesLeft', data)
  });
  socket.on('pesRight', function(data){
    console.log('pesRight: ' + data);
    io.sockets.emit('pesRight', data)
  });
});
io.listen(3003);