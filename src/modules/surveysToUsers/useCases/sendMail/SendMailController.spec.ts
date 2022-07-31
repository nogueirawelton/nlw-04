import request from "supertest";
import { app } from "../../../../shared/http/app";
import { SurveysRepository } from "../../../surveys/repositories/infra/SurveysRepository";
import { UsersRepository } from "../../../users/repositories/infra/UsersRepository";

let usersRepository: UsersRepository;
let surveysRepository: SurveysRepository;

describe("Send Mail", () => {
  beforeEach(async () => {
    usersRepository = new UsersRepository();
    surveysRepository = new SurveysRepository();
  });

  it("Should be able to send a mail", async () => {
    const user = await usersRepository.create({
      name: "Name Example",
      email: "email@example.com"
    });

    const survey = await surveysRepository.create({
      title: "Title Example",
      description: "Description Example"
    });

    const response = await request(app).post("/sendMail").send({
      email: user.email,
      survey_id: survey.id
    });

    expect(response.statusCode).toBe(201);
  });

  it("Should not be able to send a invalid mail", async () => {
    const response = await request(app).post("/sendMail").send({});

    expect(response.statusCode).toBe(400);
  });
})