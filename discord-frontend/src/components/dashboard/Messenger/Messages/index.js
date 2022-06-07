import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import Message from "./Message";
import DUMMY_MESSAGES from "./dummy_messages";

const MainContainer = styled("div")({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
      {DUMMY_MESSAGES.map((message) => {
        return (
          <Message
            key={message.id}
            {...message}
            username={message.author.username}
          />
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
