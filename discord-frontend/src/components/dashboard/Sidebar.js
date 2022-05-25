import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";

const MainContainer = styled("div")({
  width: "7.2rem",
  gridRow: "span 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: colors.blackGray,
});

const Sidebar = () => {
  return <MainContainer>Sidebar</MainContainer>;
};

export default Sidebar;
