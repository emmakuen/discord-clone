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

const updateFriends = async (userId) => {
  try {
    // find online users
    const receiverList = serverStore.getActiveConnections(userId);
    if (receiverList.length > 0) {
      const user = await User.findById(userId, { id: 1, friends: 1 }).populate(
        "friends",
        "id username email"
      );

      if (user) {
        const friendsList = user.friends.map((friend) => {
          return {
            id: friend.id,
            email: friend.email,
            username: friend.username,
          };
        });

        // get io instance
        const io = serverStore.getSocketServerInstance();
        receiverList.forEach((receiverSocketId) => {
          io.to(receiverSocketId).emit("friends", {
            friends: friendsList ? friendsList : [],
          });
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updatePendingInvitations,
  updateFriends,
};
