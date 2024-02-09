import { CreateMediaData, MediaData } from 'src/media/media.types';

export abstract class AbstractMediaRepository {
  abstract create(data: CreateMediaData): Promise<MediaData>;
}
