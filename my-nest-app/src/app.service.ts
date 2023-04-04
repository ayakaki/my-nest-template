import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserService } from './user/user.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private userService: UserService) {}

  // モジュール初期化時にシードメソッドを実行
  async onModuleInit() {
    this.userService.seed();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
