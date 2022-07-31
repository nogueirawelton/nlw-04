import { Request, Response } from "express";
import { container } from "tsyringe";
import { CalculateNpsUseCase } from "./CalculateNpsUseCase";

import * as yup from "yup";
import { AppError } from "../../../../errors/AppError";

export class CalculateNpsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { survey_id } = request.params;
    
    const calculateNpsUseCase = container.resolve(CalculateNpsUseCase);

    const npsData = await calculateNpsUseCase.execute(survey_id);

    return response.json(npsData);
  }
}