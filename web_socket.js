const WebSocket=require("s");
const server=new WebSocket.Server({port:8802});

server.on("connection",server=>{
    console.log("Connection established");

    server.on("close",()=>{
   console.log("Connection diconnected");
    });
});