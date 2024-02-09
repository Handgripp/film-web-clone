import { MediaType } from 'src/shared/entities/media.entity';

export type CreateMediaData = {
  title: string;
  releaseDate: Date;
  type: MediaType;
};

export type CreateEpisodesData = {
  title: string;
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
  series: string;
  title: Date;
  addedAt: Date;
};
