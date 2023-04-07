import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { IUserService } from './interfaces/user-service.interface';

@Injectable()
export class UserService implements IUserService{
  constructor(private readonly userRepository: UserRepository) {}
  
}
