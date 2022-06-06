import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../../constants";
import AppbarDropdownMenu from "./AppbarDropdownMenu";
import AppbarOptionLabel from "./AppbarOptionLabel";

const MainContainer = styled("div")({
  height: "4.8rem",
  borderBottom: `1px solid ${colors.darkGray3}`,
  backgroundColor: colors.darkGray,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.6rem",
  boxShadow: colors.boxShadow,
});

const Appbar = () => {
  return (
    <MainContainer>
      <AppbarOptionLabel />
      <AppbarDropdownMenu />
    </MainContainer>
  );
};

export default Appbar;
