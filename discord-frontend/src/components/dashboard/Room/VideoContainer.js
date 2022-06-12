import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
});

const VideoContainer = () => {
  return <MainContainer>VideoContainer</MainContainer>;
};

export default VideoContainer;
