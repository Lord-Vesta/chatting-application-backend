import { Server } from "socket.io";
import { registerSocketEvents } from "./event.js";

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    registerSocketEvents(socket, io);

    socket.on("disconnect", () => {
      console.log("user disconnected", socket.id);
    });
  });

  return io;
};
