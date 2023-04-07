import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({name: 'last_name'})
  lastName: string;

  @Field()
  @Column({name: 'first_name'})
  firstName: string;

  @Field(() => Int)
  @Column({name: 'age'})
  age: number;

  @Field()
  @Column({name: 'birth_place'})
  birthPlace: string;

  @Field()
  @Column({name: 'created_at'})
  @CreateDateColumn()
  createdAt: string;

  @Field()
  @Column({name: 'created_by'})
  createdBy: string;

  @Field()
  @Column({name: 'updated_at'})
  @UpdateDateColumn()
  updatedAt: string;

  @Field()
  @Column({name: 'updated_by'})
  updatedBy: string;
}
