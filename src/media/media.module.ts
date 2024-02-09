import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episodes } from 'src/shared/entities/episodes.entity';
import { Media } from 'src/shared/entities/media.entity';
import { MediaRepository } from 'src/shared/repositories/media.repository';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Episodes, Media])],
  controllers: [MediaController],
  exports: [MediaService, MediaRepository],
  providers: [MediaService, MediaRepository],
})
export class MediaModule {}
