import React from "react";
import { IconButton } from "@mui/material";
import { Mic, MicOff } from "@mui/icons-material";

const RoomMicButton = ({ iconStyle, localStream }) => {
  const [isMicEnabled, setIsMicEnabled] = React.useState(true);
  const toggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !isMicEnabled;
    setIsMicEnabled(!isMicEnabled);
  };
  return (
    <IconButton onClick={toggleMic}>
      {isMicEnabled ? <Mic style={iconStyle} /> : <MicOff style={iconStyle} />}
    </IconButton>
  );
};

export default RoomMicButton;
