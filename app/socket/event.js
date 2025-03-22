// import { saveMessageToDB } from "../controllers/messageController.js";

export const registerSocketEvents = (socket, io) => {
  // 🏠 Join Chat Room
  socket.on("joinRoom", ({ userId, chatId }) => {
    socket.join(chatId);
    console.log(`User ${userId} joined room: ${chatId}`);
  });

  // ✉️ Send Message
  socket.on(
    "sendMessage",
    async ({ senderId, receiverId, chatId, message }) => {
      const msgData = { senderId, receiverId, message, chatId };

      // Save message in MongoDB
      //   await saveMessageToDB(msgData);

      // Emit to the receiver
      io.to(chatId).emit("receiveMessage", msgData);
    }
  );

  // 🚪 Leave Room
  socket.on("leaveRoom", ({ userId, chatId }) => {
    socket.leave(chatId);
    console.log(`User ${userId} left room: ${chatId}`);
  });
};
