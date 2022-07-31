import { AppError } from "../../../../errors/AppError";
import { SurveysToUsersRepositoryInMemory } from "../../repositories/in-memory/SurveysToUsersRepositoryInMemory";
import { ReceiveAnswerUseCase } from "./ReceiveAnswerUseCase";

let surveysToUsersRepositoryInMemory: SurveysToUsersRepositoryInMemory;
let receiveAnswerUseCase: ReceiveAnswerUseCase;

describe("Receive Answer", () => {
  beforeEach(() =>{
    surveysToUsersRepositoryInMemory = new SurveysToUsersRepositoryInMemory();
    receiveAnswerUseCase = new ReceiveAnswerUseCase(surveysToUsersRepositoryInMemory);
  })

  it("Should not be able to receive an answer to a non-existent survey", async () => {
    await expect(
      receiveAnswerUseCase.execute("Survey Example", 10)
    ).rejects.toEqual(new AppError("Survey User Does Not Exists!"));
  })
})