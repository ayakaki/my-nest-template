import { Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateUserDto } from "./create-user.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto){
  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  id: number;
}