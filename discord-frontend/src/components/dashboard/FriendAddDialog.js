import React from "react";
import { emailPattern } from "../../utils/validators";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { InputWithLabel } from "../../components";
import PrimaryButton from "../shared/PrimaryButton";

const FriendAddDialog = ({
  isDialogOpen,
  closeDialog,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = React.useState();
  const [isFormValid, setIsFormValid] = React.useState();

  const handleSendInvitation = () => {
    // send friend request
    sendFriendInvitation();
  };

  const handleCloseDialog = () => {
    closeDialog();
    setEmail("");
  };

  React.useEffect(() => {
    setIsFormValid(emailPattern.test(email));
  }, [email]);

  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography
          sx={{
            fontSize: "2.4rem",
            fontWeight: 800,
            letterSpacing: "-1px",
            textAlign: "center",
          }}
        >
          Invite a friend
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ marginTop: "-1rem" }}>
        <DialogContentText>
          <Typography sx={{ marginBottom: "1.6rem", fontSize: "1.4rem" }}>
            Enter email address of friend you would like to invite.
          </Typography>
          <InputWithLabel
            label="email"
            id="friend-email"
            type="email"
            placeholder="Enter email address"
            value={email}
            setValue={setEmail}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <PrimaryButton
          onClick={handleSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyles={{
            margin: "1.6rem",
            marginTop: 0,
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default FriendAddDialog;
