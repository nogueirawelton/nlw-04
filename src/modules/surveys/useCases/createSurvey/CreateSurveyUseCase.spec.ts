import { SurveysRepositoryInMemory } from "../../repositories/in-memory/SurveysRepositoryInMemory";
import { CreateSurveyUseCase } from "./CreateSurveyUseCase";

let surveysRepositoryInMemory: SurveysRepositoryInMemory;
let createSurveyUseCase: CreateSurveyUseCase;

describe("Create Surveys", () => {
  beforeEach(() => {
    surveysRepositoryInMemory = new SurveysRepositoryInMemory();
    createSurveyUseCase = new CreateSurveyUseCase(surveysRepositoryInMemory);
  })

  it("Should be able to create a new survey", async () => {
    const survey = await createSurveyUseCase.execute({
      title: "Title Example",
      description: "Description Example"
    });

    expect(survey).toHaveProperty("id");
  })
})