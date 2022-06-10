import React from "react";
import { styled } from "@mui/system";
import colors from "../../../constants/colors";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: colors.primary,
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const RoomButtons = () => {
  return <MainContainer>RoomButtons</MainContainer>;
};

export default RoomButtons;
