import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from 'src/interfaces/dtos/update-user.dto';

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
    return await this.repository.findOne({where:{id: id}});
  }

  async createUser(name: string, age: number, birthPlace: string): Promise<User> {
    return await this.repository.save({name, age, birthPlace});
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {

    const user = await this.repository.findOne({where:{id: updateUserDto.id}});

    if (!user) {
      throw new Error(`User with ID ${updateUserDto.id} not found`);
    }
    Object.assign(user, updateUserDto);

    return await this.repository.save(user);
  }

  async deleteUser(id: number): Promise<boolean> {
    const user = await this.repository.findOne({where:{id: id}});

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    await this.repository.delete(id);

    return true;
  }
}
