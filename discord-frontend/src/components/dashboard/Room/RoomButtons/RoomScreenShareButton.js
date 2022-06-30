import React from "react";
import { IconButton } from "@mui/material";
import { ScreenShare, StopScreenShare } from "@mui/icons-material";

const screenSharingConstraints = {
  audio: false,
  video: true,
};

const RoomScreenShareButton = ({
  iconStyle,
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive,
}) => {
  const toggleScreenShare = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(
          screenSharingConstraints
        );
      } catch (err) {
        console.error(
          "Error occured while trying to start screen sharing...",
          err
        );
      }

      if (stream) {
        setScreenSharingStream(stream);
        // TODO: webRTCHandler switch outgoing video tracks
      }
    } else {
      // TODO: webRTCHandler switch outgoing tracks
      screenSharingStream.getTrack().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }
  };
  return (
    <IconButton onClick={toggleScreenShare}>
      {isScreenSharingActive ? (
        <ScreenShare style={iconStyle} />
      ) : (
        <StopScreenShare style={iconStyle} />
      )}
    </IconButton>
  );
};

export default RoomScreenShareButton;
