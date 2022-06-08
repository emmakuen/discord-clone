const serverStore = require("../serverStore");
const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const chatUpdates = require("./updates/chat");

const directMessageHandler = async (socket, data) => {
  try {
    console.log("handling direct message event...");
    const { userId } = socket.user;
    const { receiverId, content } = data;

    // create a message
    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT",
    });

    // find if conversation with current participants exists
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverId] },
    });

    if (conversation) {
      conversation.messages.push(message.id);
      await conversation.save();

      // if participants are online, perform realtime update on their conversation
      chatUpdates.updateChatHistory(conversation.id.toString());
    } else {
      // create new conversation if none exists
      const newConversation = await Conversation.create({
        messages: [message.id],
        participants: [userId, receiverId],
      });

      // perform realtime update
      chatUpdates.updateChatHistory(conversation.id.toString());
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directMessageHandler;
