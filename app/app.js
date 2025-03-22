import express from "express";
import http from "http";
import { registerRoutes } from "./routesRegister/routes.register.js";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

export const startServer = async () => {
  try {
    registerRoutes(app,server);
    server.listen(3001, () => console.log(`server is started at ${3001}`));
  } catch (error) {
    console.error(error);
    console.error("COULD NOT START SERVER");
    process.exit(1);
  }
};
