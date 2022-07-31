import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to create an user", async () => {
    const user = await createUserUseCase.execute({
      name: "Name Example",
      email: "Email Example"
    });
    expect(user).toHaveProperty("id");
  });
  
  it("Should not be able to create an existent user", async () => {
    await createUserUseCase.execute({
      name: "Name Example",
      email: "Email Example"
    });

    await expect(
      createUserUseCase.execute({
        name: "Name Example",
        email: "Email Example"
      })
    ).rejects.toEqual(new AppError("User Already Exists!"));
  })
})