import { inject, injectable } from "tsyringe";
import { SurveyToUser } from "../../../../entities/SurveyToUser";
import { ISurveysRepository } from "../../../surveys/repositories/ISurveysRepository";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { ISurveysToUsersRepository } from "../../repositories/ISurveysToUsersRepository";

import { resolve } from "path";
import { AppError } from "../../../../errors/AppError";
import { IMailProvider } from "../../../../shared/container/providers/IMailProvider";

interface IRequest {
  email :string;
  survey_id: string;
}

@injectable()
export class SendMailUseCase {
  constructor(
    @inject("SurveysToUsersRepository")
    private surveysToUsersRepository: ISurveysToUsersRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("SurveysRepository")
    private surveysRepository: ISurveysRepository,
    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute({ email, survey_id }: IRequest): Promise<SurveyToUser> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User Does Not Exists!")
    }

    const survey = await this.surveysRepository.findById(survey_id);

    if (!survey) {
      throw new AppError("Survey Does Not Exists!")
    }

    const surveyToUserAlreadyExists = await this.surveysToUsersRepository.find(user.id, survey.id);

    const npsPath = resolve(__dirname, "..", "..", "..", "..", "views", "emails", "npsMail.hbs");
    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      link: process.env.MAIL_URL,
      id: ""
    };

    if (surveyToUserAlreadyExists) {
      variables.id = surveyToUserAlreadyExists.id;
      await this.mailProvider.execute(email, survey.title, variables, npsPath);
      return surveyToUserAlreadyExists;
    }

    const surveyToUser = await this.surveysToUsersRepository.create({
      user_id: user.id,
      survey_id
    });

    variables.id = surveyToUser.id;
    await this.mailProvider.execute(email, survey.title, variables, npsPath);

    return surveyToUser;
  }
}