const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId });
  console.log("New connected users: ", connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log("New connected users: ", connectedUsers);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};
