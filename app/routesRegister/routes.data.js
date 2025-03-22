import { RouteHandler } from "../../common/utils/handlers.js";
import { ROUTE_CONSTANTS } from "../../common/constants/route.constants.js";
import { chatApplicationRoutes } from "../chat-application/chatApplication.routes.js";

const { CHAT_APPLICATION } = ROUTE_CONSTANTS;
export const routes = [
  new RouteHandler(CHAT_APPLICATION, chatApplicationRoutes),
];
