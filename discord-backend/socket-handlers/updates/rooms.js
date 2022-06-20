const serverStore = require("../../serverStore");

const updateRooms = (toSocketId = null) => {
  const io = serverStore.getSocketServerInstance();
  const activeRooms = serverStore.getActiveRooms();

  if (toSocketId) {
    io.to(toSocketId).emit("active-rooms", {
      activeRooms,
    });
  } else {
    io.emit("active-rooms", {
      activeRooms,
    });
  }
};

module.exports = {
  updateRooms,
};
