const roomInitializeConnectionHandler = (socket, data) => {
  const { connectedUserSocketId } = data;
  const initData = {
    connectedUserSocketId: socket.id,
  };

  socket.to(connectedUserSocketId).emit("connection-init", initData);
};

module.exports = roomInitializeConnectionHandler;
