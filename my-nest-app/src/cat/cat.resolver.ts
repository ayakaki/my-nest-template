import { Resolver, Query } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private catService: CatService) {}

  @Query(() => [Cat])
  async cats(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}
