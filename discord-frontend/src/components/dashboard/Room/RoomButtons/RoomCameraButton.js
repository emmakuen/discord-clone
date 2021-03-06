import React from "react";
import { IconButton } from "@mui/material";
import { Videocam, VideocamOff } from "@mui/icons-material";

const RoomCameraButton = ({ iconStyle, localStream }) => {
  const [isCameraEnabled, setIsCameraEnabled] = React.useState(true);
  const toggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = !isCameraEnabled;
    setIsCameraEnabled(!isCameraEnabled);
  };
  return (
    <IconButton onClick={toggleCamera}>
      {isCameraEnabled ? (
        <Videocam style={iconStyle} />
      ) : (
        <VideocamOff style={iconStyle} />
      )}
    </IconButton>
  );
};

export default RoomCameraButton;
