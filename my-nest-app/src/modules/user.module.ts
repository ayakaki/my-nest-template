import { Module } from '@nestjs/common';
import { UserService } from '../application/services/user.service';
import { UserResolver } from '../interfaces/resolovers/user.resolver';
import { User } from '../domain/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../domain/repositories/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService, UserResolver, UserRepository],
  exports: [UserService],
})
export class UserModule {}