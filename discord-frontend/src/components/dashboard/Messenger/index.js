import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../constants";
import { connect } from "react-redux";
import MessengerWelcomeMessage from "./MessengerWelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  backgroundColor: colors.darkGray,
  display: "flex",
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <MessengerWelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messenger);
