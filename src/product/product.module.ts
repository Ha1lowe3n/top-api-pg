import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/auth/auth.entity';
import { ProductController } from './product.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity])],
    controllers: [ProductController],
})
export class ProductModule {}
