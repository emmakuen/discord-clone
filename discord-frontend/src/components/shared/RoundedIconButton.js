import React from "react";
import { Button } from "@mui/material";
import { colors } from "../../constants";

const RoundedIconButton = ({
  children,
  additionalStyles,
  additionalHoverStyles,
  ...otherProps
}) => {
  return (
    <Button
      sx={{
        margin: 0,
        padding: "1.2rem",
        minWidth: 0,
        borderRadius: "50%",
        backgroundColor: colors.darkGray,
        color: colors.secondary,
        ":hover": {
          borderRadius: "1.6rem",
          backgroundColor: colors.secondary,
          color: colors.text,
          ...additionalHoverStyles,
        },
        ...additionalStyles,
      }}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default RoundedIconButton;
