import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../shared/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import { colors } from "../../../constants";

const FriendsListItem = ({ id, username, isOnline }) => {
  return (
    <Button
      style={{
        width: "100%",
        height: "5.2rem",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.2rem",
        textTransform: "none", //override
        color: colors.contrast,
        position: "relative",
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          fontWeight: 600,
          fontSize: "1.4rem",
          color: colors.graySecondary2,
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendsListItem;
