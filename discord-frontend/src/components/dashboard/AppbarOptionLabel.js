import React from "react";
import { Typography } from "@mui/material";
import { colors } from "../../constants";
import { connect } from "react-redux";

const AppbarOptionLabel = ({ username }) => {
  return (
    <Typography
      sx={{
        fontSize: "1.6rem",
        color: colors.text,
        fontWeight: 600,
      }}
    >
      {username ? username : ""}
    </Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    username: state.chat.chosenChatDetails?.username,
  };
};

export default connect(mapStoreStateToProps)(AppbarOptionLabel);
