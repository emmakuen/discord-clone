import store from "../store/store";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
} from "../store/actions/roomActions";
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};

export const updateRoomDetails = (data) => {
  const { roomDetails } = data;

  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  console.log("active room update: ", activeRooms);
  // store.dispatch(setActiveRooms(activeRooms));
};
