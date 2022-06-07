import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Avatar from "../../../shared/Avatar";
import { colors } from "../../../../constants";

const MainContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  justifyItems: "flex-start",
  rowGap: "1.2rem",
  columnGap: "1.2rem",
  marginBottom: "3.2rem",
});

const MessagesHeader = ({ username = "" }) => {
  return (
    <MainContainer>
      <Avatar large username={username} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: colors.text,
        }}
      >
        {username}
      </Typography>
      <Typography
        sx={{
          color: colors.gray,
          marginLeft: "0.4rem",
          marginRight: "0.4rem",
          fontSize: "1.4rem",
          gridColumn: "span 2",
        }}
      >
        This is the beginning of your conversation with {username}.
      </Typography>
    </MainContainer>
  );
};

export default MessagesHeader;
