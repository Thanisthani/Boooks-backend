import { Schema, Prop ,SchemaFactory} from "@nestjs/mongoose";
import { Document } from 'mongoose';


export type ProductDocument = Product & Document;


@Schema()
export class Product{

    @Prop()
    itemName: string;

    @Prop()
    category: string;

    @Prop()
    price: string;

    @Prop()
    quantity: number;

    @Prop()
    rating: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);