const serverStore = require("../serverStore");
const friendsUpdates = require("../socket-handlers/updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;

  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  // update pending friends invitation list
  friendsUpdates.updatePendingInvitations(userDetails.userId);

  // update friends list
  friendsUpdates.updateFriends(userDetails.userId);
};

module.exports = newConnectionHandler;
