import React from "react";
import { IconButton } from "@mui/material";
import { CallEnd } from "@mui/icons-material";
import * as roomHandler from "../../../../api/socketRoomHandler";

const RoomCloseButton = ({ iconStyle }) => {
  const leaveRoom = () => roomHandler.leaveRoom();
  return (
    <IconButton onClick={leaveRoom}>
      <CallEnd style={iconStyle} />
    </IconButton>
  );
};

export default RoomCloseButton;
