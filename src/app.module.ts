import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
    imports: [
        TypeOrmModule.forRoot(config),
        ProductModule,
        TopPageModule,
        ReviewModule,
        AuthModule,
    ],
})
export class AppModule {}
