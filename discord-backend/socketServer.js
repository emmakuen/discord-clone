const authSocket = require("./middleware/authSocket");
const newConnectionHandler = require("./socket-handlers/newConnectionHandler");
const disconnectionHandler = require("./socket-handlers/disconnectionHandler");
const directMessageHandler = require("./socket-handlers/directMessageHandler");
const directChatHistoryHandler = require("./socket-handlers/directChatHistoryHandler");
const roomCreationHandler = require("./socket-handlers/roomCreationHandler");
const roomJoinHandler = require("./socket-handlers/roomJoinHandler");
const roomLeaveHandler = require("./socket-handlers/roomLeaveHandler");
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

    socket.on("direct-chat-history", (data) => {
      directChatHistoryHandler(socket, data);
    });

    socket.on("disconnect", () => {
      disconnectionHandler(socket);
    });

    socket.on("room-create", () => {
      roomCreationHandler(socket);
    });

    socket.on("room-join", (data) => {
      roomJoinHandler(socket, data);
    });

    socket.on("room-leave", (data) => {
      roomLeaveHandler(socket, data);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [1000 * 10]); // 10 seconds
};

module.exports = {
  registerSocketServer,
};
