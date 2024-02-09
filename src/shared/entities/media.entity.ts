import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Episodes } from './episodes.entity';

export enum MediaType {
  Movie = 'movie',
  Series = 'series',
}

@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  releaseDate: Date;

  @Column({
    type: 'enum',
    enum: MediaType,
  })
  type: MediaType;

  @OneToMany(() => Episodes, (episodes) => episodes.series)
  episodes: Episodes[];

  @CreateDateColumn()
  addedAt: Date;
}
