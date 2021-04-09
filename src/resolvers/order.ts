import { Resolver, Arg, Query } from "type-graphql";
import { Order, OrderModel } from "../entities/Order";
// import { CartInput } from "./types/cart-input"

@Resolver()
export default class OrderResolver {

    @Query(_returns => Order, { nullable: false})
    async returnSingleOrder(@Arg("id") id: string){
      return await OrderModel.findById({_id:id});
    };


    @Query(() => [Order])
    async returnAllOrders(){
      return await OrderModel.find();
    };

}