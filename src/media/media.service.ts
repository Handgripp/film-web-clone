import { ConflictException, Injectable } from '@nestjs/common';
import { OmdbApiClient } from 'src/http/omdbApiClient.service';
import { MediaRepository } from 'src/shared/repositories/media.repository';
import { CreateEpisodesData, CreateMediaData } from './media.types';

@Injectable()
export class MediaService {
  constructor(
    private readonly mediaRepository: MediaRepository,
    private readonly omdbApiClient: OmdbApiClient,
  ) {}

  async addMedia({ title, releaseDate, type }: CreateMediaData) {
    const titleExist = await this.mediaRepository.findOneByTitle(title);
    if (titleExist) {
      throw new ConflictException('Media with this title already exist');
    }
    const media = this.mediaRepository.create({ title, releaseDate, type });

    await this.omdbApiClient.getMovieData(title);
    return media;
  }

  async addEpisodes({ title, media }: CreateEpisodesData) {
    const episode = this.mediaRepository.addEpisodes({ title, media });
    return episode;
  }
}
