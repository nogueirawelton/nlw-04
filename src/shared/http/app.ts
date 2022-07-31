import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";

import "../container";

import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "../../errors/AppError";

export const app = express();

app.use(express.json());
app.use(routes);
app.use((error: AppError, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    })
  }
  return response.status(500).json({
    message: "Internal Server Error!",
  })
})