import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateMediaRequestDto } from './dtos/request/createMediaRequest.dto';
import { mediaResponseDto } from './dtos/response/mediaResponse.dto';
import { MediaService } from './media.service';

@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post('')
  async createMedia(
    @Body() body: CreateMediaRequestDto,
  ): Promise<mediaResponseDto> {
    const media = await this.mediaService.add(body);
    return new mediaResponseDto(media);
  }
}
