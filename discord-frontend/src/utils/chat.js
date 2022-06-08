import store from "../store/store";
import { setMessages } from "../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  // find participants of chosen conversation
  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails.id;

  if (receiverId && userId) {
    const conversationParticipants = [receiverId, userId];

    const isConversationActive = participants.every((participantId) => {
      return conversationParticipants.includes(participantId);
    });

    if (isConversationActive) {
      store.dispatch(setMessages(messages));
    }
  }
};
