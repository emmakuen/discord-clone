const roomSignalingDataHandler = (socket, data) => {
  const { connectedUserSocketId, signal } = data;

  const signalingData = { signal, connectedUserSocketId: socket.id };
  socket.to(connectedUserSocketId).emit("connection-signal", signalingData);
};

module.exports = roomSignalingDataHandler;
