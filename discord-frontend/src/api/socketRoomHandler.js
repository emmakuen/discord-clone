import store from "../store/store";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setScreenSharingStream,
  setIsJoinedWithAudioOnly,
} from "../store/actions/roomActions";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const onLocalStreamCreation = () => {
    store.dispatch(setOpenRoom(true, true));
    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsJoinedWithAudioOnly(audioOnly));
    socketConnection.createNewRoom();
  };

  const isAudioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(isAudioOnly, onLocalStreamCreation);
};

export const updateRoomDetails = (data) => {
  const { roomDetails } = data;

  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  // render room if creator is friend of the user
  const friends = store.getState().friends.friends;
  const rooms = [];

  const userId = store.getState().auth.userDetails.id;
  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;
    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUsername: "Me" });
    } else {
      friends.forEach((friend) => {
        if (friend.id === room.roomCreator.userId) {
          rooms.push({ ...room, creatorUsername: friend.username });
        }
      });
    }
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const onLocalStreamCreation = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsJoinedWithAudioOnly(audioOnly));
    socketConnection.joinRoom({ roomId });
  };
  const isAudioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(isAudioOnly, onLocalStreamCreation);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
