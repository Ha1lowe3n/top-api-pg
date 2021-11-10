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
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageEntity } from './top-page.entity';

@Controller('top-page')
export class TopPageController {
    @Post('create')
    async createTopPage(@Body() dto: Omit<TopPageEntity, '_id'>) {}

    @Get(':id')
    async getTopPage(@Param('id') id: string) {}

    @Delete(':id')
    async deleteTopPage(@Param('id') id: string) {}

    // !! dto TopPageModel передаем ли _id или нет
    @Patch(':id')
    async patchTopPage(@Param('id') id: string, @Body() dto: TopPageEntity) {}

    @HttpCode(200)
    @Post()
    async findTopPage(@Body() dto: FindTopPageDto) {}
}
