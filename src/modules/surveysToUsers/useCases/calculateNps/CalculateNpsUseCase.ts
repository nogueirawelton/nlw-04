import { inject, injectable } from "tsyringe";
import { ISurveysToUsersRepository } from "../../repositories/ISurveysToUsersRepository";

interface IResponse {
  total_answers: number;
  detractors: number;
  promoters: number;
  passives: number;
  nps: number;
}

@injectable()
export class CalculateNpsUseCase {
  constructor(
    @inject("SurveysToUsersRepository")
    private surveysToUsersRepository: ISurveysToUsersRepository
  ) {}
  async execute(survey_id: string): Promise<IResponse> {
    const surveys = await this.surveysToUsersRepository.findAll(survey_id);

    const detractors = surveys.filter((survey) => {
      return survey.value >= 0 && survey.value <= 6;
    }).length;

    const promoters = surveys.filter((survey) => {
      return survey.value >= 9 && survey.value <= 10;
    }).length;

    const passives = surveys.filter((survey) => {
      return survey.value >= 7 && survey.value <= 8;
    }).length;

    const total_answers = surveys.length;

    const calculate = +(((promoters - detractors) / total_answers) * 100).toFixed(2);

    return {
      total_answers,
      detractors,
      promoters,
      passives,
      nps: calculate
    }
  }
}