import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { IUserService } from './interfaces/user-service.interface';
import { CreateUserDto } from 'src/interfaces/dtos/create-user.dto';
import { UpdateUserDto } from 'src/interfaces/dtos/update-user.dto';

@Injectable()
export class UserService implements IUserService{
  constructor(private readonly userRepository: UserRepository) {}
  
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findByAge(age: number): Promise<User[]> {
    return await this.userRepository.findByAge(age);
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto.name, createUserDto.age, createUserDto.birthPlace);
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.updateUser(updateUserDto);
  }

  async deleteUser(id: number): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }

}
