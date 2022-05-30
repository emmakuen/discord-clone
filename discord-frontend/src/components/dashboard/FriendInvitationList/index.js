import React from "react";
import { styled } from "@mui/system";
import FriendInvitationListItem from "./FriendInvitationListItem";
import { connect } from "react-redux";

// const DUMMY_INVITATIONS = [
//   {
//     id: 1,
//     senderInfo: {
//       username: "Laura",
//       email: "dummy@laura.com",
//     },
//   },
//   {
//     id: 2,
//     senderInfo: {
//       username: "Jessy",
//       email: "dummy@jess.com",
//     },
//   },
// ];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  padding: "0 0.8rem",
});

const FriendInvitationList = ({ pendingFriendsInvitations }) => {
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((invitation) => (
        <FriendInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return { ...friends };
};

export default connect(mapStoreStateToProps)(FriendInvitationList);
