import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import SidebarTopButton from "./SidebarTopButton";

const MainContainer = styled("div")({
  padding: "1.2rem",
  gridRow: "span 2",
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: colors.blackGray,
});

const Separator = styled("div")({
  width: "3.2rem",
  height: "2px",
  backgroundColor: colors.darkGray,
  borderRadius: "1px",
});

const Sidebar = () => {
  return (
    <MainContainer>
      <SidebarTopButton />
      <Separator />
    </MainContainer>
  );
};

export default Sidebar;
