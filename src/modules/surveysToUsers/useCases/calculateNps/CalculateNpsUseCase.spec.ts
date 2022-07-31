import { AppError } from "../../../../errors/AppError";
import { SurveysRepository } from "../../../surveys/repositories/infra/SurveysRepository";
import { UsersRepository } from "../../../users/repositories/infra/UsersRepository";
import { SurveysToUsersRepositoryInMemory } from "../../repositories/in-memory/SurveysToUsersRepositoryInMemory";
import { SurveysToUsersRepository } from "../../repositories/infra/SurveysToUsersRepository";
import { CalculateNpsUseCase } from "./CalculateNpsUseCase";

let surveysToUsersRepositoryInMemory: SurveysToUsersRepositoryInMemory;
let calculateNpsUseCase: CalculateNpsUseCase;
let usersRepository: UsersRepository;
let surveysRepository: SurveysRepository;
let surveysToUsers: SurveysToUsersRepository;

describe("Calculate Nps", () => {
  beforeEach(() =>{
    usersRepository = new UsersRepository();
    surveysRepository = new SurveysRepository();
    surveysToUsers = new SurveysToUsersRepository();
    surveysToUsersRepositoryInMemory = new SurveysToUsersRepositoryInMemory();
    calculateNpsUseCase = new CalculateNpsUseCase(surveysToUsersRepositoryInMemory);
  })

  it("Should be able to get a nps calc", async () => {
    const user = await usersRepository.create({
      name: "Name Example",
      email: "Email Example"
    });

    const survey = await surveysRepository.create({
      title: "Title Example",
      description: "Description Example"
    });

    await surveysToUsers.create({
      user_id: user.id,
      survey_id: survey.id
    });

    const nps = await calculateNpsUseCase.execute(survey.id);

    expect(nps).toHaveProperty("total_answers")
  })
})