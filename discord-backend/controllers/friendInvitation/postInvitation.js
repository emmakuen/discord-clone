const User = require("../../models/User");

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

  // TODO: check if invitation already exists

  return res.send("Controller is working!");
};

module.exports = postInvitation;
