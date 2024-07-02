import { Injectable } from '@nestjs/common';
import { createClient } from '@libsql/client';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';

@Injectable()
export class UrlService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  readonly turso = createClient({
    url: this.configService.get("TURSO_DATABASE_URL"),
    authToken: this.configService.get("TURSO_AUTH_TOKEN"),
  });

  async create(originalUrl: string): Promise<any> {
    const existingUrl = await this.findByOriginalUrl(originalUrl);
    if (existingUrl) {
      return existingUrl;
    }

    let shortUrl: string;
    let url: any;
    do {
      shortUrl = this.generateShortUrl();
      url = await this.findOne(shortUrl);
    } while (url);

    const newUrl = { originalUrl, shortUrl };
    await this.turso.execute({
      sql: 'INSERT INTO urls (originalUrl, shortUrl) VALUES (?, ?)',
      args: [newUrl.originalUrl, newUrl.shortUrl],
    });
    return newUrl;
  }

  async findOne(shortUrl: string): Promise<any> {
    const result = await this.turso.execute({
      sql: 'SELECT * FROM urls WHERE shortUrl = ?',
      args: [shortUrl],
    });

    if (result.rows.length > 0) {
      return result.rows[0]; 
    } else {
      return null; 
    }
  }

  async findByOriginalUrl(originalUrl: string): Promise<any> {
    const result = await this.turso.execute({
      sql: 'SELECT * FROM urls WHERE originalUrl = ?',
      args: [originalUrl],
    });

    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  }

  private generateShortUrl(): string {
    const randomValue = randomBytes(6); // Genera 6 bytes aleatorios
    return randomValue.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').substring(0, 8);
  }
}
