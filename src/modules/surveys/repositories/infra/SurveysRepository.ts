import { prisma } from "../../../../database";
import { ICreateSurveyDTO } from "../../../../dtos/ICreateSurveyDTO";
import { Survey } from "../../../../entities/Survey";
import { ISurveysRepository } from "../ISurveysRepository";

export class SurveysRepository implements ISurveysRepository {  
  async create(data: ICreateSurveyDTO): Promise<Survey> {
    const survey = await prisma.survey.create({
      data,
    });
    return survey;
  }

  async findAll(): Promise<Survey[]> {
    const surveys = await prisma.survey.findMany();
    return surveys;
  }

  async findById(id: string): Promise<Survey> {
    const survey = await prisma.survey.findUnique({
      where: {
        id
      }
    });
    return survey;
  }
}