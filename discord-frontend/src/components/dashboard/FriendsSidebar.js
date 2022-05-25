import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";

const MainContainer = styled("div")({
  width: "22.4rem",
  gridRow: "span 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: colors.darkGray2,
});
const FriendsSidebar = () => {
  return <MainContainer>FriendsSidebar</MainContainer>;
};

export default FriendsSidebar;
