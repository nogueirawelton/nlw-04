import { Router } from "express";
import { UserController } from "../../../modules/users/useCases/createUser/CreateUserController";

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.handle);