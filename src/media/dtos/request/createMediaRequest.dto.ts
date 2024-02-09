import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { MediaType } from 'src/shared/entities/media.entity';

export class CreateMediaRequestDto {
  @ApiProperty({ example: 'movie' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '2022.01.01' })
  @IsNotEmpty()
  releaseDate: Date;

  @ApiProperty({ example: 'movie' })
  @IsEnum(MediaType)
  @IsNotEmpty()
  type: MediaType;
}
