import { ApiProperty } from '@nestjs/swagger';
import { MediaData } from 'src/media/media.types';

export class mediaResponseDto {
  @ApiProperty({ example: 'a@a.com' })
  title: string;

  @ApiProperty({ example: 'kamil' })
  realaseDate: Date;

  @ApiProperty()
  id: string;

  @ApiProperty()
  addedAt: Date;

  @ApiProperty()
  type: string;

  constructor(data: MediaData) {
    this.title = data.title;
    this.realaseDate = data.releaseDate;
    this.id = data.id;
    this.type = data.type;
    this.addedAt = data.addedAt;
  }
}
