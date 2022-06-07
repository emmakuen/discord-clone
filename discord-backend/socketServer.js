const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socket-handlers/newConnectionHandler");
const disconnectionHandler = require("./socket-handlers/disconnectionHandler");
const directMessageHandler = require("./socket-handlers/directMessageHandler");
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

  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();
    io.emit("online-users", { onlineUsers });
  };

  io.on("connection", (socket) => {
    console.log("User connected...");
    console.log("Socket id: ", socket.id);
    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on("direct-message", (data) => {
      directMessageHandler(socket, data);
    });

    socket.on("disconnect", () => {
      disconnectionHandler(socket);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [1000 * 10]); // 10 seconds
};

module.exports = {
  registerSocketServer,
};
