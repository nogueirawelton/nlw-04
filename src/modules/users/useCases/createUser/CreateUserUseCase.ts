import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}
  async execute({ name, email }: ICreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User Already Exists!");
    }

    const user = await this.userRepository.create({ name, email });
    
    return user;
  }
}