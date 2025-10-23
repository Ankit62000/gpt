const { Server } = require("socket.io");

const initSocketServer = (httpServer) => {
    const io = new Server(httpServer, {});


    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);    
    });

}
module.exports = initSocketServer;