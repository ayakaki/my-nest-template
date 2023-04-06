import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UserService {
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

  async createUser(name: string, age: number, birthPlace: string): Promise<User> {
    return await this.userRepository.createUser(name, age, birthPlace);
  }

}
