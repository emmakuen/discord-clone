const Conversation = require("../models/Conversation");
const chatUpdates = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverId } = data;

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverId] },
      type: "DIRECT",
    });

    if (conversation) {
      chatUpdates.updateChatHistory(conversation.id.toString(), socket.id);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directChatHistoryHandler;
