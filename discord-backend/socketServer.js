const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socket-handlers/newConnectionHandler");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("User connected...");
    console.log("Socket id: ", socket.id);
    newConnectionHandler(socket, io);
  });
};

module.exports = {
  registerSocketServer,
};
