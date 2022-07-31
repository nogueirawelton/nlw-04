import { prisma } from "../../../../database";
import { ICreateSurveyToUserDTO } from "../../../../dtos/ICreateSurveyToUserDTO";
import { SurveyToUser } from "../../../../entities/SurveyToUser";
import { ISurveysToUsersRepository } from "../ISurveysToUsersRepository";

export class SurveysToUsersRepository implements ISurveysToUsersRepository {
  async create(data: ICreateSurveyToUserDTO): Promise<SurveyToUser> {
    const surveyToUser = await prisma.surveyToUser.create({
      data,
    });
    return surveyToUser;
  }

  async find(user_id: string, survey_id: string): Promise<SurveyToUser> {
    const surveyToUser = await prisma.surveyToUser.findFirst({
      where: {
        user_id,
        survey_id,
        value: null
      }
    });
    return surveyToUser;
  }

  async updateValue(id: string, value: number): Promise<void> {
    await prisma.surveyToUser.update({
      where: {
        id
      },
      data: {
        value
      }
    })
  }

  async findById(id: string): Promise<SurveyToUser> {
    const surveyToUser = await prisma.surveyToUser.findUnique({
      where: {
        id,
      },
    });
    return surveyToUser;
  }

  async findAll(survey_id: string): Promise<SurveyToUser[]> {
    const surveysToUsers = await prisma.surveyToUser.findMany({
      where: {
        survey_id,
        NOT: {
          value: null
        }
      }
    });
    return surveysToUsers;
  }
}