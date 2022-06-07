import React from "react";
import { styled } from "@mui/system";
import Messages from "./Messages";
import MessengerInput from "./MessengerInput";

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateRows: "1fr auto",
  padding: "2rem",
});

const MessengerContent = ({ chosenChatDetails }) => {
  React.useEffect(() => {
    // TODO: fetch chat history with specific user id
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <MessengerInput />
    </Wrapper>
  );
};

export default MessengerContent;
