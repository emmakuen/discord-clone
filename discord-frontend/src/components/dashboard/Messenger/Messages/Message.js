import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../../constants";
import Avatar from "../../../shared/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "4.2rem 1fr",
  columnGap: "1.6rem",
  justifyItems: "flex-start",
  margin: "1.2rem",
});

const MessageContent = styled("div")({
  color: colors.lightGray,
  maxWidth: "72rem",
  lineHeight: 1.5,
  gridColumn: "2",
  fontSize: "1.4rem",
});

const Message = (props) => {
  const { sameAuthor, sameDay, content, username, date } = props;
  if (sameAuthor && sameDay) {
    return (
      <MainContainer style={{ marginTop: "-1rem" }}>
        <MessageContent>{content}</MessageContent>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Avatar username={username} additionalStyles={{ gridRow: "span 2" }} />
      <Typography
        style={{
          fontSize: "1.6rem",
          marginBottom: "0.4rem",
          fontWeight: 600,
          color: colors.secondary,
        }}
      >
        {username}
        <span
          style={{
            fontSize: "1.2rem",
            color: colors.graySecondary,
            marginLeft: "1.2rem",
          }}
        >
          {date}
        </span>
      </Typography>
      <MessageContent>{content}</MessageContent>
    </MainContainer>
  );
};

export default Message;
