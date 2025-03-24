import Message from "../chat-application/chatApplication.model.js";

export const registerSocketEvents = (socket, io) => {
  // 🏠 Join Chat Room
  socket.on("joinRoom", ({ userId, roomId }) => {
    try {
      socket.join(roomId);
      console.log(`User ${userId} joined room:${roomId}`);
      io.to(roomId).emit("userJoined", { userId, timestamp: new Date() });
    } catch (error) {
      console.error("Error joining room:", error);
      socket.emit("error", { message: "Failed to join room" });
    }
  });

  // ✉️ Send Message
  socket.on(
    "sendMessage",
    async ({ senderId, receiverId, roomId, message }) => {
      const msgData = { senderId, receiverId, message, roomId };

      // Save message in MongoDB
      await Message.create(msgData);

      // Emit to the receiver
      io.to(roomId).emit("receiveMessage", msgData);
    }
  );

  socket.on("leaveRoom", ({ userId, chatId }) => {
    socket.leave(chatId);
    console.log(`User ${userId} left room: ${chatId}`);
  });
};
