import React from "react";
import { IconButton } from "@mui/material";
import { CallEnd } from "@mui/icons-material";

const RoomCloseButton = ({ iconStyle }) => {
  const leaveRoom = () => console.log("leaving room");
  return (
    <IconButton onClick={leaveRoom}>
      <CallEnd style={iconStyle} />
    </IconButton>
  );
};

export default RoomCloseButton;
