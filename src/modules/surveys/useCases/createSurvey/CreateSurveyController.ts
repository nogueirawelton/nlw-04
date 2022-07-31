import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";

import * as yup from "yup";
import { AppError } from "../../../../errors/AppError";

export class CreateSurveyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description} = request.body;
    
    const schema = yup.object({
      title: yup.string().required(),
      description: yup.string().required()
    });

    try {
      await schema.validate(request.body, {
        abortEarly: false
      });
    } catch(err) {
      throw new AppError(err.message);
    }
    
    const createSurveyUseCase = container.resolve(CreateSurveyUseCase);

    const survey = await createSurveyUseCase.execute({
      title,
      description,
    });

    return response.status(201).json(survey);
  }
}