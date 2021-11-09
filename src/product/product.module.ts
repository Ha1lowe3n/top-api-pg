import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/auth/auth.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity])],
})
export class ProductModule {}
