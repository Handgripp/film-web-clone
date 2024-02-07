import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episodes } from 'src/shared/entities/episodes.entity';
import { Media } from 'src/shared/entities/media.entity';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Episodes, Media])],
  providers: [MediaService],
})
export class MediaModule {}
