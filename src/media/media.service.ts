import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { MediaRepository } from 'src/shared/repositories/media.repository';
import { CreateMediaData } from './media.types';

@Injectable()
export class MediaService {
  constructor(
    private readonly mediaRepository: MediaRepository,
    private http: HttpService,
  ) {}

  async add({ title, releaseDate, type }: CreateMediaData) {
    const media = this.mediaRepository.create({ title, releaseDate, type });
    return media;
  }
}
