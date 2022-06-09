import React from "react";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import { CloseFullscreen, OpenInFull } from "@mui/icons-material";
import { colors } from "../../../constants";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
});

const RoomResizeButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <IconButton onClick={handleRoomResize} style={{ color: colors.gray }}>
        {isRoomMinimized ? <OpenInFull /> : <CloseFullscreen />}
      </IconButton>
    </MainContainer>
  );
};

export default RoomResizeButton;
