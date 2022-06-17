const serverStore = require("../serverStore");
const roomsUpdates = require("./updates/rooms");

const roomJoinHandler = (socket, data) => {
  const { roomId } = data;
  const socketId = socket.id;
  const userId = socket.user.userId;

  const newParticipant = {
    userId,
    socketId,
  };

  const activeRoom = serverStore.getActiveRoom(roomId);
  serverStore.joinActiveRoom(activeRoom, newParticipant);
  roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;
