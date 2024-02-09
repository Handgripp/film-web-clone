import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMediaRequestDto } from './dtos/request/createMediaRequest.dto';
import { mediaResponseDto } from './dtos/response/mediaResponse.dto';
import { MediaService } from './media.service';

@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('')
  async createMedia(
    @Body() body: CreateMediaRequestDto,
  ): Promise<mediaResponseDto> {
    const media = await this.mediaService.add(body);
    return new mediaResponseDto(media);
  }
}
