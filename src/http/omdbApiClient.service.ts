import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class OmdbApiClient {
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('API_KEY');
  }
  async getMovieData(title: string) {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${this.apiKey}&t=${title}`,
    );
    try {
      if (!response.data.Title) {
        throw new BadRequestException('Film not found in the OMDB API');
      }
      return response;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
