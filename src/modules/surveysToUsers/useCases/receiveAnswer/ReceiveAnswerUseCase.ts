import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ISurveysToUsersRepository } from "../../repositories/ISurveysToUsersRepository";

@injectable()
export class ReceiveAnswerUseCase {
constructor(
  @inject("SurveysToUsersRepository")
  private surveysToUsersRepository: ISurveysToUsersRepository
) {}
  async execute(id: string, value: number): Promise<void> {

    const surveyToUser = await this.surveysToUsersRepository.findById(id);

    if (!surveyToUser) {
      throw new AppError("Survey User Does Not Exists!");
    }
    this.surveysToUsersRepository.updateValue(id, value);
  }
}