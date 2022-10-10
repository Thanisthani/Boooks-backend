import { IsString, IsInt } from 'class-validator'

export class productCreatedto {
    @IsString()
    itemName: string;

    @IsString()
    category: string;

    @IsString()
    price: string;

    @IsInt()
    quantity: number;

    @IsInt()
    rating: number;
    
}