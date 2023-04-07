import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  birthPlace: string;
}
