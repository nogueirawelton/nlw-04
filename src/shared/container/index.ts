import { container } from "tsyringe";

import { SurveysRepository } from "../../modules/surveys/repositories/infra/SurveysRepository";
import { ISurveysRepository } from "../../modules/surveys/repositories/ISurveysRepository";
import { SurveysToUsersRepository } from "../../modules/surveysToUsers/repositories/infra/SurveysToUsersRepository";
import { ISurveysToUsersRepository } from "../../modules/surveysToUsers/repositories/ISurveysToUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/infra/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IMailProvider } from "./providers/IMailProvider";
import { MailProvider } from "./providers/mailProvider/MailProvider";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)
 
container.registerSingleton<ISurveysRepository>(
  "SurveysRepository",
  SurveysRepository
)

container.registerSingleton<ISurveysToUsersRepository>(
  "SurveysToUsersRepository",
  SurveysToUsersRepository
)

container.registerSingleton<IMailProvider>(
  "MailProvider",
  MailProvider
)