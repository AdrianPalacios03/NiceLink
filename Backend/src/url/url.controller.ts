import { Controller, Get, Post, Body, Param, Redirect, NotFoundException } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  async create(@Body('originalUrl') originalUrl: string) {
    const url = await this.urlService.create(originalUrl);
    return { shortUrl: `${url.shortUrl}` };
  }

  @Get(':shortUrl')
  @Redirect()
  async redirect(@Param('shortUrl') shortUrl: string) {
    const url = await this.urlService.findOne(shortUrl);
    if (!url) {
      throw new NotFoundException('URL not found');
    }
    return { url: url.originalUrl };
  }
}
