import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UserUseCase } from 'src/application/use_cases/user.use-case';

@Resolver(() => User)
export class UserResolver {
  constructor(private userUseCase: UserUseCase) {}

  // 複数件取得
  @Query(() => [User])
  async allUsers(): Promise<User[]> {
    return this.userUseCase.findAllUsers();
  }

  // 複数件取得 (条件付き)
  @Query(() => [User])
  async usersByAge(@Args('age') age: number): Promise<User[]> {
    return this.userUseCase.findUsersByAge(age);
  }

  // 一件取得
  @Query(() => User)
  async userById(@Args('id') id: number): Promise<User> {
    return this.userUseCase.findUserById(id);
  }

  // 一件登録
  @Mutation(() => User)
  async registerUser(@Args('data') createUserDto: CreateUserDto,): Promise<User> {
    return await this.userUseCase.registerUser(createUserDto);
  }

  // 一件更新
  @Mutation(() => User)
  async editUser(@Args('data') updateUserDto: UpdateUserDto,): Promise<User> {

    return await this.userUseCase.editUser(updateUserDto);
  }

  // 一件削除
  @Mutation(() => Boolean)
  async destoryUser(@Args('id') id: number): Promise<boolean> {
    return await this.userUseCase.destoryUser(id);
  }

}
