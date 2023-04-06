import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from '../../application/services/user.service';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

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
  async userById(@Args('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  // 一件登録
  @Mutation(() => User)
  async createUser(@Args('data') createUserDto: CreateUserDto,): Promise<User> {

    return await this.userService.createUser(createUserDto);
  }

  // 一件更新
  @Mutation(() => User)
  async updateUser(@Args('data') updateUserDto: UpdateUserDto,): Promise<User> {

    return await this.userService.updateUser(updateUserDto);
  }

}
