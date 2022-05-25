import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";

const MainContainer = styled("div")({
  height: "4.8rem",
  borderBottom: `1px solid ${colors.contrast}`,
  backgroundColor: colors.darkGray,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.6rem",
});

const Appbar = () => {
  return <MainContainer>Appbar</MainContainer>;
};

export default Appbar;
