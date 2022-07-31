import { inject, injectable } from "tsyringe";
import { Survey } from "../../../../entities/Survey";
import { ISurveysRepository } from "../../repositories/ISurveysRepository";

@injectable()
export class ListSurveysUseCase {
  constructor(
    @inject("SurveysRepository")
    private surveysRepository: ISurveysRepository
  ) {}
  async execute(): Promise<Survey[]> {
    const surveys = await this.surveysRepository.findAll();
    return surveys;
  }
}