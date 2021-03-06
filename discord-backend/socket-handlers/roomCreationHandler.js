const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomCreationHandler = (socket) => {
  console.log("handling room creation event...");
  const socketId = socket.id;
  const userId = socket.user.userId;

  const roomDetails = serverStore.addNewActiveRoom(userId, socketId);

  socket.emit("room-create", {
    roomDetails,
  });

  roomsUpdates.updateRooms();
};

module.exports = roomCreationHandler;
