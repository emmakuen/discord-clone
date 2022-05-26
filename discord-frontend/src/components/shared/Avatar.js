import React from "react";
import { styled } from "@mui/system";
import { colors } from "../../constants";

const AvatarPreview = styled("div")({
  height: "4.2rem",
  width: "4.2rem",
  backgroundColor: colors.primary,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  fontWeight: 600,
  color: colors.text,
});

const Avatar = ({ username, large }) => {
  const additionalStyle = large ? { height: "8rem", width: "8rem" } : {};
  return (
    <AvatarPreview style={additionalStyle}>
      {username?.substring(0, 2)}
    </AvatarPreview>
  );
};

export default Avatar;
