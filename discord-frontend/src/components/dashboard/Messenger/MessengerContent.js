import React from "react";
import { styled } from "@mui/system";
import MessengerMessages from "./MessengerMessages";
import MessengerInput from "./MessengerInput";

const Wrapper = styled("div")({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  React.useEffect(() => {
    // TODO: fetch chat history with specific user id
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <MessengerMessages />
      <MessengerInput />
    </Wrapper>
  );
};

export default MessengerContent;
