import { Module } from '@nestjs/common';
import { UserResolver } from '../interfaces/resolovers/user.resolver';
import { User } from '../domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserUseCase } from 'src/application/use_cases/user.use-case';
import { UserService } from 'src/application/services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserUseCase, UserService, UserResolver, UserRepository],
  exports: [UserUseCase, UserService],
})
export class UserModule {}