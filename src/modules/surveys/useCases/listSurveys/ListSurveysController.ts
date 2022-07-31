import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSurveysUseCase } from "./ListSurveysUseCase";

export class ListSurveysController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const listSurveysUseCase = container.resolve(ListSurveysUseCase);

    const surveys = await listSurveysUseCase.execute();

    return response.json(surveys);
  }
}