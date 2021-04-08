import { InputType, Field, ID } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { ObjectId } from "mongodb";
import { User } from "../../entities/User";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  @Length(1, 255)
  username: String;

  @Field()
  @IsEmail()
  email: String;

  @Field(()=> ID)
  cart_id: ObjectId;  
}