import React from "react";
import { IconButton } from "@mui/material";
import { CloseFullscreen, OpenInFull } from "@mui/icons-material";

const buttonStyle = {
  position: "absolute",
  right: "1.2rem",
};

const RoomResizeButton = ({ isRoomMinimized, handleRoomResize, iconStyle }) => {
  return (
    <IconButton onClick={handleRoomResize} style={buttonStyle}>
      {isRoomMinimized ? (
        <OpenInFull style={iconStyle} />
      ) : (
        <CloseFullscreen style={iconStyle} />
      )}
    </IconButton>
  );
};

export default RoomResizeButton;
