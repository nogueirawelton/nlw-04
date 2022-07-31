import { ICreateSurveyToUserDTO } from "../../../dtos/ICreateSurveyToUserDTO";
import { SurveyToUser } from "../../../entities/SurveyToUser";

export interface ISurveysToUsersRepository {
  create(data: ICreateSurveyToUserDTO): Promise<SurveyToUser>;
  find(user_id: string, survey_id: string): Promise<SurveyToUser>;
  updateValue(id: string, value: number): Promise<void>;
  findById(id: string): Promise<SurveyToUser>;
  findAll(survey_id: string): Promise<SurveyToUser[]>
}