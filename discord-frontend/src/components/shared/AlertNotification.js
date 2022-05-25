import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
  isAlertOpen,
  closeAlertMessage,
  alertMessageContent,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={isAlertOpen}
      onClose={closeAlertMessage}
      autoHideDuration={6000} // 6 seconds
    >
      <Alert severity="info" sx={{ fontSize: "1.4rem" }}>
        {alertMessageContent}
      </Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = (state) => {
  return { ...state.alert };
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(AlertNotification);
