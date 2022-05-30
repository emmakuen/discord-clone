import React from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../shared/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";
import { colors } from "../../../constants";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const FriendInvitationListItem = ({
  id,
  username,
  email,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [areButtonsDisabled, setAreButtonsDisabled] = React.useState(false);
  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setAreButtonsDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setAreButtonsDisabled(true);
  };
  const buttonProps = {
    disabled: areButtonsDisabled,
    acceptFriendInvitation: handleAcceptInvitation,
    rejectFriendInvitation: handleRejectInvitation,
  };
  return (
    <Tooltip title={<span style={{ fontSize: "1.2rem" }}>{email}</span>}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "4.2rem",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "1.4rem",
              color: colors.graySecondary2,
              flexGrow: 1,
            }}
          >
            {username}
          </Typography>
          <InvitationDecisionButtons {...buttonProps} />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FriendInvitationListItem);
