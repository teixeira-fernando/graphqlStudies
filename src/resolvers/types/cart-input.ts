import { InputType, Field, ID } from "type-graphql";
import { ObjectId } from "mongodb";
import { Cart } from "../../entities/Cart";

@InputType()
export class CartInput implements Partial<Cart> {

    @Field(()=> ID)
    products?: ObjectId;

}