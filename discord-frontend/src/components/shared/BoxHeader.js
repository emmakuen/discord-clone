import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../../constants";

const BoxHeader = ({ title }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        color: colors.text,
        marginBottom: "0.2rem",
        fontWeight: 600,
        fontSize: "3.2rem",
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
};

export default BoxHeader;
