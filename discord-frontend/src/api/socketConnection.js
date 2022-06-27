import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import { updateDirectChatHistoryIfActive } from "../utils/chat";
import * as roomHandler from "./socketRoomHandler";
import * as webRTCHandler from "./webRTCHandler";
import store from "../store/store";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io("http://localhost:5002", {
    auth: {
      token: jwtToken,
    },
  }); // TODO: update in  prod

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server.");
  });

  //

  socket.on("friend-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on("friends", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("room-create", (data) => {
    roomHandler.updateRoomDetails(data);
  });

  socket.on("active-rooms", (data) => {
    roomHandler.updateActiveRooms(data);
  });

  socket.on("connection-prepare", (data) => {
    const { connectedUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connectedUserSocketId, false);

    socket.emit("connection-init", {
      connectedUserSocketId,
    });
  });

  socket.on("connection-init", (data) => {
    const { connectedUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(connectedUserSocketId, true);
  });

  socket.on("connection-signal", (data) => {
    webRTCHandler.handleSignalingData(data);
  });
};

export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("room-create");
};

export const joinRoom = (data) => {
  socket.emit("room-join", data);
};

export const leaveRoom = (data) => {
  socket.emit("room-leave", data);
};

export const signalPeerData = (data) => {
  socket.emit("connection-signal", data);
};
