const FriendInvitation = require("../../models/FriendInvitation");
const friendsUpdates = require("../../socket-handlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    // remove invitation from pending invitations
    const invitation = await FriendInvitation.exists({ id });

    if (invitation !== null) {
      await FriendInvitation.findByIdAndDelete(id);
    }

    // update pending invitations that are displayed to user
    friendsUpdates.updatePendingInvitations(userId);

    return res.status(200).send("Invitation rejected.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

module.exports = postReject;
