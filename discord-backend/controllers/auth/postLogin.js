const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailLower = email.toLowerCase();
    const user = await User.findOne({ email: emailLower });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = jwt.sign(
        {
          userId: user.id,
          email,
        },
        process.env.TOKEN_KEY,
        { expiresIn: "24h" }
      );
      return res.status(200).json({
        userDetails: {
          email: user.email,
          token,
          username: user.username,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Please try again."); // 400 - bad request
  } catch (err) {
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

module.exports = postLogin;
