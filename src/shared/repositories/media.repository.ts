import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateEpisodesData,
  CreateMediaData,
  EpisodesData,
  MediaData,
} from 'src/media/media.types';
import { Repository } from 'typeorm';
import { Episodes } from '../entities/episodes.entity';
import { Media } from '../entities/media.entity';
import { AbstractMediaRepository } from './types/mediaAbstract.repository';

@Injectable()
export class MediaRepository implements AbstractMediaRepository {
  constructor(
    @InjectRepository(Media) private mediaRepository: Repository<Media>,
    @InjectRepository(Episodes)
    private episodesRepository: Repository<Episodes>,
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

  async findOneByTitle(title: string): Promise<MediaData> {
    return this.mediaRepository.findOneBy({ title });
  }

  async addEpisodes({
    title,
    media,
  }: CreateEpisodesData): Promise<EpisodesData> {
    const newEpisode = this.episodesRepository.create({ title, media });
    const savedEpisode = await this.episodesRepository.save(newEpisode);
    return savedEpisode;
  }
}
