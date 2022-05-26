import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import FriendAddButton from "./FriendAddButton";

const MainContainer = styled("div")({
  width: "22.4rem",
  gridRow: "span 2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0.8rem",
  backgroundColor: colors.darkGray2,
});
const FriendsSidebar = () => {
  return (
    <MainContainer>
      <FriendAddButton />
    </MainContainer>
  );
};

export default FriendsSidebar;
