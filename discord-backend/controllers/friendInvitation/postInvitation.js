const User = require("../../models/User");
const FriendInvitation = require("../../models/FriendInvitation");

const postInvitation = async (req, res) => {
  const { targetEmail } = req.body;

  const { userId, email } = req.user;

  // check if invitee is not invitation sender
  if (email.toLowerCase() === targetEmail.toLowerCase()) {
    return res
      .status(409)
      .send("Sorry. You cannot send an invitation to yourself.");
  }

  const targetUser = await User.findOne({
    email: targetEmail.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `Couldn't find the user. Please check the email address and try again.`
      );
  }

  // check if invitation already exists
  const invitationAlreadyExists = FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser.id,
  });

  if (invitationAlreadyExists) {
    return res.status(409).send("Invitation has been already sent.");
  }

  // check invited user is already friend
  const isAlreadyFriend = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (isAlreadyFriend) {
    return res.status(409).send("Friend already added.");
  }

  // add invitation to database

  return res.send("Controller is working!");
};

module.exports = postInvitation;
