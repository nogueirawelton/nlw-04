import { Router } from "express";
import { surveyRoutes } from "./survey.routes";
import { surveyToUserRoutes } from "./surveyToUser.routes";
import { userRoutes } from "./user.routes";

export const routes = Router();

routes.use("/users", userRoutes);
routes.use("/surveys", surveyRoutes);
routes.use("/", surveyToUserRoutes);
