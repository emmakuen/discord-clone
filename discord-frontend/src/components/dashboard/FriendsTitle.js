import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../../constants";

const FriendsTitle = ({ title }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        color: colors.graySecondary2,
        fontSize: "1.2rem",
        fontWeight: 600,
        alignSelf: "flex-start",
        padding: "0.8rem",
      }}
    >
      {title}
    </Typography>
  );
};

export default FriendsTitle;
