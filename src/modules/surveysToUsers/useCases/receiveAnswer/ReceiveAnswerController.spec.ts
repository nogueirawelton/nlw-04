import request from "supertest";
import { app } from "../../../../shared/http/app";
import { SurveysRepository } from "../../../surveys/repositories/infra/SurveysRepository";
import { UsersRepository } from "../../../users/repositories/infra/UsersRepository";
import { SurveysToUsersRepository } from "../../repositories/infra/SurveysToUsersRepository";

let usersRepository: UsersRepository;
let surveysRepository: SurveysRepository;
let surveysToUsers: SurveysToUsersRepository;

describe("Receive Answer", () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository();
    surveysRepository = new SurveysRepository();
    surveysToUsers = new SurveysToUsersRepository();
  });

  it("Should be able to receive a answer", async () => {
    const user = await usersRepository.create({
      name: "Name Example",
      email: "email_@example.com"
    });

    const survey = await surveysRepository.create({
      title: "Title Example",
      description: "Description Example"
    });

    const surveyToUser = await surveysToUsers.create({
      user_id: user.id,
      survey_id: survey.id
    });

    const response = await request(app).get(`/answers/10?u=${surveyToUser.id}`);

    expect(response.statusCode).toBe(200);
  });

  it("Should not be able to receive a invalid answer", async () => {
    const response = await request(app).get("/answers/example?u=example");

    expect(response.statusCode).toBe(400);
  })
})