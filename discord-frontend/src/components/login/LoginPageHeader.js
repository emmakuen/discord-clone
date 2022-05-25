import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "../../constants";
import BoxHeader from "../shared/BoxHeader";

const Wrapper = styled("div")({
  textAlign: "center",
});

const LoginPageHeader = () => {
  return (
    <Wrapper>
      <BoxHeader title="Welcome back!" />
      <Typography sx={{ color: colors.gray, fontSize: "1.4rem" }}>
        We're so excited to see you again!
      </Typography>
    </Wrapper>
  );
};

export default LoginPageHeader;
