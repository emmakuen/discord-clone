import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants";

const RedirectText = styled("span")({
  color: colors.link,
  fontWeight: 600,
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
  },
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  const space = text && redirectHandler ? " " : "";
  return (
    <Typography
      sx={{
        color: colors.graySecondary,
        fontSize: "1.3rem",
      }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText
        onClick={redirectHandler}
      >{`${space}${redirectText}`}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
