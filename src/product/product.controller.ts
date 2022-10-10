import { Controller,Post,Body,Get,Param } from '@nestjs/common';
import { productCreatedto } from './dto/productCreate.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(
    private productService : ProductService
    ) { }
    
    // create product

    @Post()

    createUser(@Body() productCreateDTO: productCreatedto)
    {
        return this.productService.createProduct(productCreateDTO);
    }


    // Get all product
    @Get()
    getUser() {
        return this.productService.getAll();
    }

    // get one product

    @Get(':pID')

    getOneUser(@Param('pID') pId: string) {
        return this.productService.getOne(pId);

        
    }

}
