import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";
import AppbarDropdownMenu from "./AppbarDropdownMenu";

const MainContainer = styled("div")({
  height: "4.8rem",
  borderBottom: `1px solid ${colors.darkGray3}`,
  backgroundColor: colors.darkGray,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: colors.boxShadow,
});

const Appbar = () => {
  return (
    <MainContainer>
      <AppbarDropdownMenu />
    </MainContainer>
  );
};

export default Appbar;
