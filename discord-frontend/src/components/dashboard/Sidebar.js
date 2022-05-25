import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import SidebarTopButton from "./SidebarTopButton";

const MainContainer = styled("div")({
  padding: "1.2rem",
  gridRow: "span 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: colors.blackGray,
});

const Sidebar = () => {
  return (
    <MainContainer>
      <SidebarTopButton />
    </MainContainer>
  );
};

export default Sidebar;
