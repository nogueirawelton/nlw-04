import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

import * as yup from "yup";
import { AppError } from "../../../../errors/AppError";

export class UserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

  
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().email().required()
    });

    try {
      await schema.validate(request.body, {
        abortEarly: false
      })
    } catch(err) {
      throw new AppError(err.message);
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);
    
    const user = await createUserUseCase.execute({
      name,
      email,
    });
    return response.status(201).json(user);
  }
}