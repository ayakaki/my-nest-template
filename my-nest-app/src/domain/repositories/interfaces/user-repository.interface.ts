import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from 'src/interfaces/dtos/update-user.dto';
import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/interfaces/dtos/create-user.dto';

export interface IUserRepository {
  selectAllUsers(): Promise<User[]> ;
  selectUsersByAge(age: number): Promise<User[]>;
  selectUserById(id: number): Promise<User>;
  insertUser(createdUserDto: CreateUserDto): Promise<User>;
  updateUser(updateUserDto: UpdateUserDto): Promise<User>;
  deleteUser(id: number): Promise<boolean>;
}
