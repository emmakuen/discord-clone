import React from "react";
import { styled } from "@mui/system";
import Messages from "./Messages";
import MessengerInput from "./MessengerInput";
import { getDirectChatHistory } from "../../../api/socketConnection";

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateRows: "1fr auto",
  padding: "2rem",
  width: "100%",
});

const MessengerContent = ({ chosenChatDetails }) => {
  React.useEffect(() => {
    getDirectChatHistory({ receiverId: chosenChatDetails?.id });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <MessengerInput />
    </Wrapper>
  );
};

export default MessengerContent;
