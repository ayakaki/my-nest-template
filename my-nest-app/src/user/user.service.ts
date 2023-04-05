import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  // private users: User[] = [];
  constructor(private readonly userRepository: UserRepository) {}
  

  async findAll(): Promise<User[]> {
    console.log("findAll")
    return await this.userRepository.findAll();
  }

}
