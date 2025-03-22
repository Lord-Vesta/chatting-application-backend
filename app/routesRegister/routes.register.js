import cors from "cors";
import helmet from "helmet";
import { json, urlencoded } from "express";
import { ResponseHandler } from "../../common/utils/handlers.js";
import { routes } from "./routes.data.js";
import { chatApplicationRoutes } from "../chat-application/chatApplication.routes.js";
import http from "http";
import { Server } from "socket.io";
import { initializeSocket } from "../socket/socket.js";

export const registerRoutes = (app, server) => {
  app.use(cors());
  initializeSocket(server);

  app.use(helmet());
  app.use(urlencoded({ extended: false, limit: "2mb" }));
  app.use(json());
  app.get("/", (req, res, next) => {
    res
      .status(200)
      .send(new ResponseHandler({ message: "Server is Running!!" }));
  });

  for (let route of routes) {
    app.use(route.path, route.router);
  }
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
  });
};
