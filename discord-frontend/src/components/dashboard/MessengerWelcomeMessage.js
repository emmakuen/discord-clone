import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { colors } from "../../constants";

const Wrapper = styled("div")({
  flexGrow: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MessengerWelcomeMessage = () => {
  return (
    <Wrapper>
      <Typography
        variant="h5"
        sx={{
          color: colors.text,
          fontSize: "1.6rem",
          letterSpacing: "0.2px",
          backgroundColor: colors.darkGray3,
          padding: "0.6rem 1.2rem",
          borderRadius: "50px",
        }}
      >
        Select a chat to start messaging
      </Typography>
    </Wrapper>
  );
};

export default MessengerWelcomeMessage;
