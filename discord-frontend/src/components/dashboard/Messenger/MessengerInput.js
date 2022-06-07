import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { colors } from "../../../constants";

const MainContainer = styled("div")({
  width: "100%",
  padding: "1rem",
});

const Input = styled("input")({
  backgroundColor: colors.darkGray2,
  width: "100%",
  color: colors.text,
  fontSize: "1.4rem",
  border: "none",
  outline: "none",
  borderRadius: "0.8rem",
  padding: "1.2rem",
  ":focus": {
    outline: `${colors.blackGray} 2px solid`,
  },
});

const MessengerInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = React.useState("");
  const handleSendMessage = () => {
    console.log(message);
    setMessage("");
  };
  const placeholder = `Write message to ${chosenChatDetails?.username}`;
  const onChange = (e) => setMessage(e.target.value);
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const inputProps = { placeholder, value: message, onChange, onKeyDown };

  return (
    <MainContainer>
      <Input {...inputProps} />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(MessengerInput);
