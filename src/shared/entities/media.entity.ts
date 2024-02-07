import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Episodes } from './episodes.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  realaseDate: string;

  @Column({
    type: 'enum',
    enum: ['movie, series'],
  })
  type: string;

  @OneToMany(() => Episodes, (episodes) => episodes.series)
  episodes: Episodes[];

  @CreateDateColumn()
  addedAt: Date;
}
