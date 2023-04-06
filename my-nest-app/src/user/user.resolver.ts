import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // 複数件取得
  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  // 複数件取得 (条件付き)
  @Query(() => [User])
  async usersByAge(@Args('age') age: number): Promise<User[]> {
    return this.userService.findByAge(age);
  }

  // 一件取得
  @Query(() => User)
  async userById(@Args('id') age: number): Promise<User> {
    return this.userService.findById(age);
  }

  // 一件登録
  @Mutation(() => User)
  async createUser(
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('birthPlace') birthPlace: string,
  ): Promise<User> {

    return await this.userService.createUser(name, age, birthPlace);
  }

}
