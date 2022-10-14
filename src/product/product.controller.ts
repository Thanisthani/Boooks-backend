import { Controller,Post,Body,Get,Param,UseGuards } from '@nestjs/common';
import { productCreatedto } from './dto/productCreate.dto';
import { ProductService } from './product.service';
import { AuthGuard } from '@nestjs/passport';

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
    // @UseGuards(AuthGuard('jwt'))
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
