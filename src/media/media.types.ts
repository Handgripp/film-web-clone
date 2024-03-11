import { MediaType } from 'src/shared/entities/media.entity';

export type CreateMediaData = {
  title: string;
  releaseDate: Date;
  type: MediaType;
};

export type CreateEpisodesData = {
  title: string;
  media: string;
};

export type MediaData = {
  id: string;
  title: string;
  releaseDate: Date;
  type: MediaType;
  addedAt: Date;
};

export type EpisodesData = {
  id: string;
  media: string;
  title: string;
  addedAt: Date;
};
