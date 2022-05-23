const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const emailLower = email.toLowerCase();
    // check if user exists
    const userExists = await User.exists({ email: emailLower });
    if (userExists) {
      return res.status(409).send("E-mail already in use."); // conflict response
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user doc and save in database
    const user = await User.create({
      username,
      email: emailLower,
      password: encryptedPassword,
    });

    // create JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email,
      },
      process.env.TOKEN_KEY,
      { expiresIn: "24h" }
    );
    res.status(201).json({
      userDetails: {
        email: user.email,
        token,
        username: user.username,
      },
    });
  } catch (err) {
    return res.status(500).send("Error occured. Please try again.");
  }
};

module.exports = postRegister;
