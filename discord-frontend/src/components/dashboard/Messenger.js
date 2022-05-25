import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";

const MainContainer = styled("div")({
  backgroundColor: colors.darkGray,
  display: "flex",
});

const Messenger = () => {
  return <MainContainer>Messenger</MainContainer>;
};

export default Messenger;
