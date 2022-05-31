const FriendInvitation = require("../../models/FriendInvitation");
const User = require("../../models/User");
const friendsUpdates = require("../../socket-handlers/updates/friends");

const postAccept = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    // remove invitation from pending invitations
    const invitation = await FriendInvitation.findOne({ id });

    if (invitation === null) {
      return res.status(400).send("Error occured. Please try again.");
    }

    const { senderId, receiverId } = invitation;

    // make sender and receiver friends by adding them in their friend list
    const sender = await User.findById(senderId);
    sender.friends = [...sender.friends, receiverId];

    const receiver = await User.findById(receiverId);
    receiver.friends = [...receiver.friends, senderId];

    await sender.save();
    await receiver.save();

    // delete invitation
    await FriendInvitation.findByIdAndDelete(id);

    // update list of friends if user is online
    friendsUpdates.updateFriends(senderId.toString());
    friendsUpdates.updateFriends(receiverId.toString());

    // update pending invitations that are displayed to user
    friendsUpdates.updatePendingInvitations(userId);

    return res.status(200).send("Invitation accepted.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

module.exports = postAccept;
