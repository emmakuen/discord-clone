const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socket-handlers/newConnectionHandler");
const disconnectionHandler = require("./socket-handlers/disconnectionHandler");
const serverStore = require("./serverStore");

const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("User connected...");
    console.log("Socket id: ", socket.id);
    newConnectionHandler(socket, io);

    socket.on("disconnect", () => {
      disconnectionHandler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
};
