import { User } from "src/domain/entities/user.entity";
import { CreateUserDto } from "src/interfaces/dtos/create-user.dto";

export interface IUserService {
  findAll(): Promise<User[]>;
  findByAge(age: number): Promise<User[]>;
  findById(id: number): Promise<User>;
  createUser(createUserDto: CreateUserDto): Promise<User>;
}