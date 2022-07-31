import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { User } from "../../../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  
  async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, data);

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}