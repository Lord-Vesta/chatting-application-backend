import express from "express";
import http from "http";
import { registerRoutes } from "./routesRegister/routes.register.js";
import { Server } from "socket.io";
import { mongoDbUrl } from "./config/db.js";
import connectToMongoDb from "./connection/mongodbConnection.js";

const app = express();

const server = http.createServer(app);

console.log(process.env.PORT );

export const startServer = async () => {
  try {
    registerRoutes(app, server);
    connectToMongoDb();
    server.listen(process.env.PORT , () => console.log(`server is started at ${process.env.PORT }`));
  } catch (error) {
    console.error(error);
    console.error("COULD NOT START SERVER");
    process.exit(1);
  }
};
