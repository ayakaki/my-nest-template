import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  private users: User[] = [];
  constructor(
    // @InjectRepository(User)
    // private readonly userRepository: Repository<User>,
  ) {}
  
  // モジュール初期化時にシードメソッドを実行
  async onModuleInit() {
    this.seed();
  }

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
    // return await this.userRepository.find();
  }

  // シードメソッドを追加
  seed() {
    let sampleUser: User = {
      id: 1,
      name: 'Taro',
      age: 3,
      birthPlace: 'tokyo',
    };

    this.create(sampleUser);
  }
}
