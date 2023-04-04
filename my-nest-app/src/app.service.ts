import { Injectable, OnModuleInit } from '@nestjs/common';
import { CatService } from './cat/cat.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private catService: CatService) {}

  // モジュール初期化時にシードメソッドを実行
  async onModuleInit() {
    this.catService.seed();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
