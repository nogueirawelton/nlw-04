import { injectable } from "tsyringe";
import { prisma } from "../../../../database";
import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { User } from "../../../../entities/User";

@injectable()
export class UsersRepository {
  async create(data: ICreateUserDTO): Promise<User>{
    const user = await prisma.user.create({
      data,
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
}