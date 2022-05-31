import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

// const DUMMY_FRIENDS = [
//   {
//     id: 1,
//     username: "Jen",
//     isOnline: true,
//   },
//   {
//     id: 2,
//     username: "Alek",
//     isOnline: false,
//   },
//   {
//     id: 3,
//     username: "Ben",
//     isOnline: false,
//   },
// ];

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // gap: "1rem",
});

const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <MainContainer>
      {friends.map((friend) => {
        const isOnline = onlineUsers.find((user) => user.userId === friend.id);

        return (
          <FriendsListItem key={friend.id} {...friend} isOnline={isOnline} />
        );
      })}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
