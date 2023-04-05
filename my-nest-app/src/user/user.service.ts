import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  private readonly users: User[] = [];
  constructor(private configService: ConfigService) {
    console.log(this.configService.get('ENV_INFO'));
  }
  
  // モジュール初期化時にシードメソッドを実行
  async onModuleInit() {
    this.seed();
  }

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  // シードメソッドを追加
  seed() {
    const sampleUser: User = {
      id: 1,
      name: 'Taro',
      age: 3,
      birthPlace: 'tokyo',
    };
    this.create(sampleUser);
  }
}
