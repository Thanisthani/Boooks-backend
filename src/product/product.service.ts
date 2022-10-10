import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productCreatedto } from './dto/productCreate.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private productModel: Model <ProductDocument>
    ) { }
    

    // create Product

    createProduct(productCreateDTO : productCreatedto): Promise<Product> {
        const newProduct = new this.productModel(productCreateDTO);
        return newProduct.save();
    }

    // get all product

    getAll() {
        return this.productModel.find();
    }

    // get one product

    getOne(id: string) {
        return this.productModel.findById(id);
        
    }
}
