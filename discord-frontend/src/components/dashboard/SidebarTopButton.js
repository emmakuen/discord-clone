import React from "react";
import { Button } from "@mui/material";
import { Groups } from "@mui/icons-material";
import { colors } from "../../constants";

const SidebarTopButton = () => {
  return (
    <Button
      style={{
        borderRadius: "1.6rem",
        margin: 0,
        padding: "1.2rem",
        minWidth: 0,
        color: colors.text,
        backgroundColor: colors.primary,
      }}
    >
      <Groups style={{ fontSize: "2.4rem" }} />
    </Button>
  );
};

export default SidebarTopButton;
