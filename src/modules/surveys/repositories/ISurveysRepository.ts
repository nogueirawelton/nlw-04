import { ICreateSurveyDTO } from "../../../dtos/ICreateSurveyDTO";
import { Survey } from "../../../entities/Survey";

export interface ISurveysRepository {
  create(data: ICreateSurveyDTO): Promise<Survey>;
  findAll(): Promise<Survey[]>;
  findById(id: string): Promise<Survey>;
}