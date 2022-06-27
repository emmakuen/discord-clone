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
  serverStore.joinActiveRoom(roomId, newParticipant);

  // notify participants that they should prepare for an incoming connection
  activeRoom.participants.forEach((participant) => {
    if (participant.socketId !== newParticipant.socketId) {
      socket.to(participant.socketId).emit("connection-prepare", {
        connectedUserSocketId: newParticipant.socketId,
      });
    }
  });

  roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;
