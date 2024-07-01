import { Controller, Get } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from './review.entity';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get('get-reviews')
  getReviews(): Promise<Array<Review>> {
    return this.reviewService.getReviews();
  }
}
