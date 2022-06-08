import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../../constants";

const Separator = styled("div")({
  height: "0.1rem",
  backgroundColor: colors.graySecondary,
  position: "relative",
  margin: "1.4rem 1.2rem",
  marginTop: "2.4rem",
});

const DateLabel = styled("span")({
  backgroundColor: colors.darkGray,
  position: "absolute",
  left: "50%",
  top: "-1rem",
  color: colors.gray,
  fontSize: "1.4rem",
  padding: "0 1.6rem",
});

const MessageDateSeparator = ({ date }) => {
  return (
    <Separator>
      <DateLabel>{date}</DateLabel>
    </Separator>
  );
};

export default MessageDateSeparator;
