import React from "react";
import { IconButton } from "@mui/material";
import { Mic, MicOff } from "@mui/icons-material";

const RoomMicButton = ({ iconStyle }) => {
  const [isMicEnabled, setIsMicEnabled] = React.useState(true);
  const toggleMic = () => setIsMicEnabled(!isMicEnabled);
  return (
    <IconButton onClick={toggleMic}>
      {isMicEnabled ? <Mic style={iconStyle} /> : <MicOff style={iconStyle} />}
    </IconButton>
  );
};

export default RoomMicButton;
