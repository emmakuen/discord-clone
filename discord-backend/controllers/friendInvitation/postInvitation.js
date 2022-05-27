const postInvitation = async (req, res) => {
  const { targetEmail } = req.body;

  return res.send("Controller is working!");
};

module.exports = postInvitation;
