import { Resolver, Arg, Query } from "type-graphql";
import { User, UserModel } from "../entities/User";
// import { CartInput } from "./types/cart-input"

@Resolver()
export class UserResolver {

    @Query(_returns => User, { nullable: false})
    async returnSingleUser(@Arg("id") id: string){
      return await UserModel.findById({_id:id});
    };


    @Query(() => [User])
    async returnAllUsers(){
      return await UserModel.find();
    };

}