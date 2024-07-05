import {
  CreateEpisodesData,
  CreateMediaData,
  EpisodesData,
  MediaData,
} from 'src/media/media.types';

export abstract class AbstractMediaRepository {
  abstract create(data: CreateMediaData): Promise<MediaData>;
  abstract addEpisodes(data: CreateEpisodesData): Promise<EpisodesData>;
  abstract findOneByTitle(email: string): Promise<MediaData>;
}
