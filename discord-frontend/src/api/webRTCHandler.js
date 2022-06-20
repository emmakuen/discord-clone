import store from "../store/store";
import { setLocalStream } from "../store/actions/roomActions";

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
