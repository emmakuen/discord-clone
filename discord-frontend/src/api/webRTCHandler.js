import store from "../store/store";
import { setLocalStream, setRemoteStreams } from "../store/actions/roomActions";
import Peer from "simple-peer";
import * as socketConnection from "./socketConnection";

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // use turn server
  } else {
    console.warn("Using only STUN server");
    return {
      iceServers: [
        {
          urls: "stun:stun.l.google.com:19302",
        },
      ],
    };
  }
};

const defaultConstraints = {
  audio: true,
  video: true,
};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

export const getLocalStreamPreview = (onlyAudio = false, callback) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callback();
    })
    .catch((err) => {
      console.error("Unable to access local stream...");
      console.error(err);
    });
};

let peers = {};

export const prepareNewPeerConnection = (
  connectedUserSocketId,
  isInitiator
) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log("preparing new peer connection as initiator");
  } else {
    console.log("preparing peer connection (not initiator)");
  }

  peers[connectedUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connectedUserSocketId].on("signal", (data) => {
    const signalData = {
      signal: data,
      connectedUserSocketId,
    };

    socketConnection.signalPeerData(signalData);
  });

  peers[connectedUserSocketId].on("stream", (remoteStream) => {
    // TODO: add new remote stream to server store
    console.log("remote stream came from the other user");
    console.log("direct connection has been established");
    remoteStream.connectedUserSocketId = connectedUserSocketId;
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { connectedUserSocketId, signal } = data;
  if (peers[connectedUserSocketId]) {
    peers[connectedUserSocketId].signal(signal);
  }
};

const addNewRemoteStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const updatedRemoteStreams = [...remoteStreams, remoteStream];

  store.dispatch(setRemoteStreams(updatedRemoteStreams));
};

export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connectedUserSocketId = mappedObject[0];
    if (peers[connectedUserSocketId]) {
      peers[connectedUserSocketId].destroy();
      delete peers[connectedUserSocketId];
    }
  });
};

export const handleParticipantLeftRoom = (data) => {
  const { connectedUserSocketId } = data;
  console.log(peers, connectedUserSocketId);
  if (peers[connectedUserSocketId]) {
    peers[connectedUserSocketId].destroy();
    delete peers[connectedUserSocketId];
  }

  const remoteStreams = store.getState().room.remoteStreams;

  const updatedRemoteStreams = remoteStreams.filter(
    (remoteStream) =>
      remoteStream.connectedUserSocketId !== connectedUserSocketId
  );

  store.dispatch(setRemoteStreams(updatedRemoteStreams));
};
