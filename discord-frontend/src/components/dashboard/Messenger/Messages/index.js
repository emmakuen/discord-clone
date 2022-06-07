import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
// import Message from "./Message";

const MainContainer = styled("div")({
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader username={chosenChatDetails?.username} />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messages);
