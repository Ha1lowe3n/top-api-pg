import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './auth.entity';
import { AuthController } from './auth.controller';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity])],
    controllers: [AuthController],
})
export class AuthModule {}
