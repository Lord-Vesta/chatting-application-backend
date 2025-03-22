import { Router } from "express";

export const chatApplicationRoutes = Router();

chatApplicationRoutes.get("/", (req, res) => {
  res.send("Hello from chat application routes!");
});
