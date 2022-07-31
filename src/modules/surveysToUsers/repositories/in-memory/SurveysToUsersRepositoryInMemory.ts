import { ICreateSurveyToUserDTO } from "../../../../dtos/ICreateSurveyToUserDTO";
import { SurveyToUser } from "../../../../entities/SurveyToUser";
import { ISurveysToUsersRepository } from "../ISurveysToUsersRepository";

export class SurveysToUsersRepositoryInMemory implements ISurveysToUsersRepository {
  surveysToUsers: SurveyToUser[] = []

  async create(data: ICreateSurveyToUserDTO): Promise<SurveyToUser> {
    const surveyToUser = new SurveyToUser();
    Object.assign(surveyToUser, data);

    this.surveysToUsers.push(surveyToUser);

    return surveyToUser;
  }

  async find(user_id: string, survey_id: string): Promise<SurveyToUser> {
    return this.surveysToUsers.find(
      surveyToUser => surveyToUser.user_id === user_id &&
      surveyToUser.survey_id === survey_id && !surveyToUser.value
    )
  }

  async updateValue(id: string, value: number): Promise<void> {
    const surveyToUser = this.surveysToUsers.find(surveyToUser => surveyToUser.id === id);

    surveyToUser.value = value;
  }

  async findById(id: string): Promise<SurveyToUser> {
    return this.surveysToUsers.find(surveyToUser => surveyToUser.id === id);
  }

  async findAll(survey_id: string): Promise<SurveyToUser[]> {
    return this.surveysToUsers.filter(surveyToUser => surveyToUser.survey_id === survey_id);
  }

}