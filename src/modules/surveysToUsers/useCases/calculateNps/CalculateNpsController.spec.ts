import request from "supertest";
import { app } from "../../../../shared/http/app";
import { SurveysRepository } from "../../../surveys/repositories/infra/SurveysRepository";
import { UsersRepository } from "../../../users/repositories/infra/UsersRepository";
import { SurveysToUsersRepository } from "../../repositories/infra/SurveysToUsersRepository";

let usersRepository: UsersRepository;
let surveysRepository: SurveysRepository;
let surveysToUsers: SurveysToUsersRepository;


describe("Calculate Npc", () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository();
    surveysRepository = new SurveysRepository();
    surveysToUsers = new SurveysToUsersRepository();
  });

  it("Should be able to calculate nps", async () => {
    const user = await usersRepository.create({
      name: "Name Example",
      email: "email__@example.com"
    });

    const survey = await surveysRepository.create({
      title: "Title Example",
      description: "Description Example"
    });

    await surveysToUsers.create({
      user_id: user.id,
      survey_id: survey.id
    });

    const response = await request(app).post(`/nps/:${survey.id}`);

    expect(response.statusCode).toBe(200);
  });
})