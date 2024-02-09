import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMediaData, MediaData } from 'src/media/media.types';
import { Repository } from 'typeorm';
import { Media } from '../entities/media.entity';
import { AbstractMediaRepository } from './types/mediaAbstract.repository';

@Injectable()
export class MediaRepository implements AbstractMediaRepository {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
  ) {}

  async create({
    title,
    releaseDate,
    type,
  }: CreateMediaData): Promise<MediaData> {
    const newMovie = this.mediaRepository.create({
      title,
      releaseDate,
      type,
    });
    const savedMovie = await this.mediaRepository.save(newMovie);
    return savedMovie;
  }
}
