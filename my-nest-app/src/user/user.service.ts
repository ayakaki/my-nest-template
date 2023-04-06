import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  // private users: User[] = [];
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
