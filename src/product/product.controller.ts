import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductEntity } from './product.entity';

@Controller('product')
export class ProductController {
    @Post('create')
    async createProduct(@Body() dto: Omit<ProductEntity, 'id'>) {}

    @Get(':id')
    async getProduct(@Param('id') id: string) {}

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {}

    // !! dto ProductModel передаем ли _id или нет
    @Patch(':id')
    async patchProduct(@Param('id') id: string, @Body() dto: ProductEntity) {}

    @HttpCode(200)
    @Post()
    async findProduct(@Body() dto: FindProductDto) {}
}
