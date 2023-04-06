import { User } from "src/domain/entities/user.entity";
import { CreateUserDto } from "src/interfaces/dtos/create-user.dto";
import { UpdateUserDto } from "src/interfaces/dtos/update-user.dto";

export interface IUserService {
  findAll(): Promise<User[]>;
  findByAge(age: number): Promise<User[]>;
  findById(id: number): Promise<User>;
  createUser(createUserDto: CreateUserDto): Promise<User>;
  updateUser(updateUserDto: UpdateUserDto): Promise<User>;
  deleteUser(id: number): Promise<boolean>;
}