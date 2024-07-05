import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/shared/role/role.decorator';
import { UserRole } from 'src/shared/role/role.enum';
import { RolesGuard } from 'src/shared/role/role.guard';
import {
  CreateEpisodesRequestDto,
  CreateMediaRequestDto,
} from './dtos/request/createMediaRequest.dto';
import {
  episodesResponseDto,
  mediaResponseDto,
} from './dtos/response/mediaResponse.dto';
import { MediaService } from './media.service';

@ApiTags('media')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Roles(UserRole.Admin)
  @Post('')
  async createMedia(
    @Body() body: CreateMediaRequestDto,
  ): Promise<mediaResponseDto> {
    const media = await this.mediaService.addMedia(body);
    return new mediaResponseDto(media);
  }

  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Roles(UserRole.Admin)
  @Post(':mediaId/episodes')
  async addEpisodes(
    @Body() body: CreateEpisodesRequestDto,
    @Param('media', new ParseUUIDPipe()) media: string,
  ): Promise<episodesResponseDto> {
    const episode = await this.mediaService.addEpisodes({
      media,
      title: body.title,
    });
    return new episodesResponseDto(episode);
  }
}
