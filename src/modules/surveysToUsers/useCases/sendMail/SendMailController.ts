import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendMailUseCase } from "./SendMailUseCase";

import * as yup from "yup";
import { AppError } from "../../../../errors/AppError";

export class SendMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, survey_id } = request.body;

    const schema = yup.object({
      email: yup.string().email().required(),
      survey_id: yup.string().required()
    });

    try {
      await schema.validate(request.body, {
        abortEarly: false
      });
    } catch(err) {
      throw new AppError(err.message);
    }

    const sendMailUseCase = container.resolve(SendMailUseCase);

    const surveyToUser = await sendMailUseCase.execute({
      email,
      survey_id,
    });

    return response.status(201).json(surveyToUser);
  }
}