import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findByAge(age: number): Promise<User[]> {
    return await this.repository.find({where: {age: age}});
  }

  async findById(id: number): Promise<User> {
    return await this.repository.findOne({where:{id}});
  }

  async createUser(name: string, age: number, birthPlace: string): Promise<User> {
    return await this.repository.save({name, age, birthPlace});
  }

}
