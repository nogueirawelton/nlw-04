import { inject, injectable } from "tsyringe";
import { ICreateSurveyDTO } from "../../../../dtos/ICreateSurveyDTO";
import { Survey } from "../../../../entities/Survey";
import { ISurveysRepository } from "../../repositories/ISurveysRepository";

@injectable()
export class CreateSurveyUseCase {
  constructor(
    @inject("SurveysRepository")
    private surveysRepository: ISurveysRepository
  ) {}
  async execute({ title, description}: ICreateSurveyDTO): Promise<Survey> {
    const survey = await this.surveysRepository.create({
      title,
      description,
    });

    return survey;
  }
}