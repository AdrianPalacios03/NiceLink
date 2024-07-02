import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';

@Module({
  imports: [],
  providers: [UrlService],
  controllers: [UrlController],
})
export class UrlModule {}
