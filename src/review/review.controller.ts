import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewEntity } from './review.entity';

@Controller('review')
export class ReviewController {
    @Post('create')
    async createReview(@Body() dto: Omit<ReviewEntity, 'id'>) {}

    @Delete(':id')
    async deleteReview(@Param('id') id: string) {}

    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {}
}
