import { Resolver, Arg, Query } from "type-graphql";
import { Cart, CartModel } from "../entities/Cart";
// import { CartInput } from "./types/cart-input"

@Resolver()
export class CartResolver {

    @Query(_returns => Cart, { nullable: false})
    async returnSingleCart(@Arg("id") id: string){
      return await CartModel.findById({_id:id});
    };


    @Query(() => [Cart])
    async returnAllCarts(){
      return await CartModel.find();
    };

}