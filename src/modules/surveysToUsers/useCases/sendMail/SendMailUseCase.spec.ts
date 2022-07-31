import { AppError } from "../../../../errors/AppError";
import { MailRepositoryInMemory } from "../../../../shared/container/providers/mailProvider/in-memory/MailRepositoryInMemory";
import { SurveysRepositoryInMemory } from "../../../surveys/repositories/in-memory/SurveysRepositoryInMemory"
import { UsersRepositoryInMemory } from "../../../users/repositories/in-memory/UsersRepositoryInMemory"
import { SurveysToUsersRepositoryInMemory } from "../../repositories/in-memory/SurveysToUsersRepositoryInMemory"
import { SendMailUseCase } from "./SendMailUseCase";

let surveysToUsersRepositoryInMemory: SurveysToUsersRepositoryInMemory;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let surveysRepositoryInMemory: SurveysRepositoryInMemory;
let mailRepositoryInMemory: MailRepositoryInMemory;
let sendMailUseCase: SendMailUseCase;

describe("Send Mail", () => {
  beforeEach(() => {
   surveysToUsersRepositoryInMemory = new SurveysToUsersRepositoryInMemory();
   usersRepositoryInMemory = new UsersRepositoryInMemory();
   surveysRepositoryInMemory = new SurveysRepositoryInMemory();
   mailRepositoryInMemory = new MailRepositoryInMemory();
   sendMailUseCase = new SendMailUseCase(surveysToUsersRepositoryInMemory, usersRepositoryInMemory, surveysRepositoryInMemory, mailRepositoryInMemory);
  });

  it("Should be able to send a mail", async () => {
    const user = await usersRepositoryInMemory.create({
      name: "Name Example",
      email: "Email Example"
    });

    const survey = await surveysRepositoryInMemory.create({
      title: "Title Example",
      description: "Description Example"
    });

    const surveyToUser = await sendMailUseCase.execute({
      email: user.email,
      survey_id: survey.id
    });

    expect(surveyToUser).toHaveProperty("id");
  });

  it("Should not be able to send a mail with a non-existent user", async () => {
    const survey = await surveysRepositoryInMemory.create({
      title: "Title Example",
      description: "Description Example"
    });

    await expect(
      sendMailUseCase.execute({
        email: "Email Example",
        survey_id: survey.id
      })
    ).rejects.toEqual(new AppError("User Does Not Exists!"))
  });

  it("Should not be able to send a mail with a non-existent survey", async () => {
    const user = await usersRepositoryInMemory.create({
      name: "Name Example",
      email: "Email Example"
    });

    await expect(
      sendMailUseCase.execute({
        email: user.email,
        survey_id: "Survey Example"
      })
    ).rejects.toEqual(new AppError("Survey Does Not Exists!"))
  });

  it("Should be able to send a mail to an existing survey", async () => {
    const user = await usersRepositoryInMemory.create({
      name: "Name Example",
      email: "Email Example"
    });

    const survey = await surveysRepositoryInMemory.create({
      title: "Title Example",
      description: "Description Example"
    });

    const firstSent = await sendMailUseCase.execute({
      email: user.email,
      survey_id: survey.id
    });

    const surveyToUser = await sendMailUseCase.execute({
      email: user.email,
      survey_id: survey.id
    });

    expect(surveyToUser.id).toBe(firstSent.id);
  })
});