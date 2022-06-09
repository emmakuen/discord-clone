import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../constants";

const MainContainer = styled("div")({
  position: "absolute",
  borderRadius: "0.8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.blackGray,
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minimizedRoomStyle = {
  bottom: 0,
  right: 0,
  width: "30%",
  height: "40vh",
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = React.useState(true);
  const resizeRoom = () => setIsRoomMinimized(!isRoomMinimized);
  return (
    <MainContainer
      style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
    >
      Room
    </MainContainer>
  );
};

export default Room;
