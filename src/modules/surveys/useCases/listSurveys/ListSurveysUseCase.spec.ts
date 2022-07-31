import { SurveysRepositoryInMemory } from "../../repositories/in-memory/SurveysRepositoryInMemory";
import { ListSurveysUseCase } from "./ListSurveysUseCase";

let surveysRepositoryInMemory: SurveysRepositoryInMemory;
let listSurveysUseCase: ListSurveysUseCase;

describe("List Survey", () => {
  beforeEach(async () => {
    surveysRepositoryInMemory = new SurveysRepositoryInMemory();
    listSurveysUseCase = new ListSurveysUseCase(surveysRepositoryInMemory);

    await surveysRepositoryInMemory.create({
      title: "Name Example 1",
      description: "Description Example 1"
    });

    await surveysRepositoryInMemory.create({
      title: "Name Example 2",
      description: "Description Example 2"
    });
  });

  it("Should be able to list all surveys", async () => {
    const surveys = await listSurveysUseCase.execute();
    expect(surveys).toHaveLength(2);
  })  
})