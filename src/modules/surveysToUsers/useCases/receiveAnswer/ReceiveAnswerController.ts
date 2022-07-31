import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReceiveAnswerUseCase } from "./ReceiveAnswerUseCase";

import * as yup from "yup";
import { AppError } from "../../../../errors/AppError";

export class ReceiveAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { value } = request.params;
    const { u } = request.query;

    const schema = yup.object({
      value: yup.object({
        value: yup.number().required()
      }),
      user: yup.object({
        u: yup.string().required(),
      })
    })
    
    try {
      await schema.validate({
        value: request.params,
        user: request.query
      });
    } catch(err) {
      throw new AppError(err.message);
    }

    const receiveAnswerUseCase = container.resolve(ReceiveAnswerUseCase);

    receiveAnswerUseCase.execute(String(u), Number(value));

    return response.send("Resposta Enviada!");
  }
}