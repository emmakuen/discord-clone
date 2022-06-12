import React from "react";
import { styled } from "@mui/system";
import colors from "../../../../constants/colors";
import RoomCameraButton from "./RoomCameraButton";
import RoomCloseButton from "./RoomCloseButton";
import RoomMicButton from "./RoomMicButton";
import RoomScreenShareButton from "./RoomScreenShareButton";
import RoomResizeButton from "./RoomResizeButton";

const MainContainer = styled("div")({
  width: "100%",
  padding: "1.2rem",
  backgroundColor: colors.primary,
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const iconStyle = { height: "2.2rem", width: "2.2rem", color: colors.text };

const RoomButtons = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <MainContainer>
      <RoomScreenShareButton iconStyle={iconStyle} />
      <RoomMicButton iconStyle={iconStyle} />
      <RoomCameraButton iconStyle={iconStyle} />
      <RoomCloseButton iconStyle={{ ...iconStyle, color: colors.error }} />
      <RoomResizeButton
        iconStyle={iconStyle}
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={handleRoomResize}
      />
    </MainContainer>
  );
};

export default RoomButtons;
