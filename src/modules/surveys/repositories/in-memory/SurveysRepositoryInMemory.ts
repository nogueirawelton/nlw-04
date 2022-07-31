import { ICreateSurveyDTO } from "../../../../dtos/ICreateSurveyDTO";
import { Survey } from "../../../../entities/Survey";
import { ISurveysRepository } from "../ISurveysRepository";

export class SurveysRepositoryInMemory implements ISurveysRepository {
  surveys: Survey[] = [];

  async create(data: ICreateSurveyDTO): Promise<Survey> {
    const survey = new Survey();
    Object.assign(survey, data);

    this.surveys.push(survey);
    return survey;
  }

  async findAll(): Promise<Survey[]> {
    return this.surveys;
  }

  async findById(id: string): Promise<Survey> {
    return this.surveys.find((survey) => survey.id === id);
  }
}