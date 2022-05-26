import React from "react";
import { Check, Clear } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { colors } from "../../../constants";

const InvitationDecisionButtons = ({
  disabled,
  acceptFriendInvitation,
  rejectFriendInvitation,
}) => {
  const acceptButtonProps = {
    disabled,
    onClick: acceptFriendInvitation,
  };
  const rejectButtonProps = {
    disabled,
    onClick: rejectFriendInvitation,
  };
  return (
    <Box>
      <IconButton style={{ color: colors.text }} {...acceptButtonProps}>
        <Check />
      </IconButton>
      <IconButton style={{ color: colors.text }} {...rejectButtonProps}>
        <Clear />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
