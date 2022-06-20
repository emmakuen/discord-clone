import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../constants";

const MainContainer = styled("div")({
  height: "50%",
  width: "50%",
  backgroundColor: colors.contrast,
});

const VideoElement = styled("video")({
  width: "100%",
  height: "100%",
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = React.useRef();

  React.useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  });

  return (
    <MainContainer>
      <VideoElement ref={videoRef} autoPlay muted={isLocalStream} />
    </MainContainer>
  );
};

export default Video;
