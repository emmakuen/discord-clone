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

const FriendAddDialog = ({
  isDialogOpen,
  closeDialog,
  sendFriendInvitation = () => {},
}) => {
  const [email, setEmail] = React.useState();
  const [isFormValid, setIsFormValid] = React.useState();

  const handleSendInvitation = () => {
    // send friend request
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
    </Dialog>
  );
};

export default FriendAddDialog;
