const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");
const serverStore = require("../../serverStore");

const updatePendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId,
    }).populate("senderId", "id username email");

    // find active connections of user with senderId if they're currently online
    const receiverList = serverStore.getActiveConnections(userId);

    const io = serverStore.getSocketServerInstance();

    receiverList.forEach((receiverSocketId) => {
      io.to(receiverSocketId).emit("friend-invitations", {
        pendingInvitations: pendingInvitations ? pendingInvitations : [],
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updatePendingInvitations,
};
