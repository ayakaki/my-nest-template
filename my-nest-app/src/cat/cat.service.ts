import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  private cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }
}
