import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "0.5rem",
  width: "100%",
});

const Label = styled("p")({
  color: colors.gray,
  textTransform: "uppercase",
  fontWeight: 800,
  fontSize: "1.2rem",
});

const Input = styled("input")({
  flexGrow: 1,
  border: "none",
  borderRadius: "0.5rem",
  background: colors.blackGray,
  margin: 0,
  fontSize: "1.6rem",
  padding: "1rem",
  color: colors.gray,
  ":focus": {
    outline: `1px solid ${colors.contrast}`,
  },
});

const InputWithLabel = (props) => {
  const { setValue, label, ...inputProps } = props;
  const handleChange = (e) => setValue(e.target.value);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...inputProps} onChange={handleChange} autoComplete="off" />
    </Wrapper>
  );
};

export default InputWithLabel;
