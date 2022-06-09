import React from "react";
import { Button } from "@mui/material";
import { colors } from "../../constants";

const HalfRoundedIconButton = ({
  children,
  additionalStyles,
  ...otherProps
}) => {
  return (
    <Button
      style={{
        borderRadius: "1.6rem",
        margin: 0,
        padding: "1.2rem",
        minWidth: 0,
        color: colors.text,
        backgroundColor: colors.primary,
        ...additionalStyles,
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default HalfRoundedIconButton;
