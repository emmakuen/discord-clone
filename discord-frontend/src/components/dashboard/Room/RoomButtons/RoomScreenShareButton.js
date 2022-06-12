import React from "react";
import { IconButton } from "@mui/material";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";

const RoomScreenShareButton = ({ iconStyle }) => {
  const [isScreenShareEnabled, setIsScreenShareEnabled] = React.useState(true);
  const toggleScreenShare = () =>
    setIsScreenShareEnabled(!isScreenShareEnabled);
  return (
    <IconButton onClick={toggleScreenShare}>
      {isScreenShareEnabled ? (
        <ScreenShare style={iconStyle} />
      ) : (
        <StopScreenShare style={iconStyle} />
      )}
    </IconButton>
  );
};

export default RoomScreenShareButton;
