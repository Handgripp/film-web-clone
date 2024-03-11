import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from './media.entity';

@Entity()
export class Episodes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Media, (media) => media.id)
  media: string;

  @Column()
  title: string;

  @CreateDateColumn()
  addedAt: Date;
}
