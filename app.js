const http = require("http")
const express = require("express");
const path = require("path")
const {Server} = require('socket.io')

const app =  express();
const server  = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.resolve('./public')))

io.on('connection', socket=>{
   socket.on('user-message',(message)=>{
    console.log('sockett',message);
    io.emit('message',message)
   })
})


app.get('/',(req,res)=>{
    return res.sendFile("/index.html")
})

server.listen(9000,()=>{
    console.log('run this server');
})