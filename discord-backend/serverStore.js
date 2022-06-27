const { v4: uuidv4 } = require("uuid");

const connectedUsers = new Map();
let activeRooms = [];

let io = null;

const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

const getSocketServerInstance = () => {
  return io;
};

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("New connected users: ", connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log(socketId, "user left the app");
  }
};

const getActiveConnections = (userId) => {
  const activeConnections = [];

  connectedUsers.forEach((user, socketId) => {
    if (user.userId === userId) {
      activeConnections.push(socketId);
    }
  });

  return activeConnections;
};

const getOnlineUsers = () => {
  const onlineUsers = [];

  connectedUsers.forEach((user, socketId) => {
    onlineUsers.push({ socketId, userId: user.userId });
  });

  return onlineUsers;
};

// rooms
const addNewActiveRoom = (userId, socketId) => {
  const newActiveRoom = {
    roomCreator: {
      userId,
      socketId,
    },
    participants: [
      {
        userId,
        socketId,
      },
    ],
    roomId: uuidv4(),
  };

  activeRooms = [...activeRooms, newActiveRoom];
  console.log("active rooms: ", activeRooms);
  return newActiveRoom;
};

const getActiveRooms = () => {
  return [...activeRooms];
};

const getActiveRoom = (roomId) => {
  const activeRoom = activeRooms.find((room) => room.roomId === roomId);
  return { ...activeRoom };
};

const joinActiveRoom = (roomId, newParticipant) => {
  const activeRoom = activeRooms.find(
    (activeRoom) => activeRoom.roomId === roomId
  );

  activeRooms = activeRooms.filter(
    (activeRoom) => activeRoom.roomId !== roomId
  );
  const updatedRoom = {
    ...activeRoom,
    participants: [...activeRoom.participants, newParticipant],
  };

  activeRooms.push(updatedRoom);
  console.log(activeRooms);
};

const leaveActiveRoom = (roomId, participantSocketId) => {
  const activeRoom = activeRooms.find(
    (activeRoom) => activeRoom.roomId === roomId
  );

  if (activeRoom) {
    const activeRoomCopy = { ...activeRoom };
    activeRoomCopy.participants = activeRoomCopy.participants.filter(
      (participant) => participant.socketId !== participantSocketId
    );

    activeRooms = activeRooms.filter(
      (activeRoom) => activeRoom.roomId !== roomId
    );

    if (activeRoomCopy.participants.length > 0) {
      activeRooms.push(activeRoomCopy);
    }
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers,
  addNewActiveRoom,
  getActiveRooms,
  getActiveRoom,
  joinActiveRoom,
  leaveActiveRoom,
};
