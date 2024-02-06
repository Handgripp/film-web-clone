import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserRequestDto } from './dtos/request/createUserRequest.dto';
import { UserResponseDto } from './dtos/response/userResponse.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('')
  async getAll(): Promise<UserResponseDto[]> {
    const users = await this.usersService.getAll();
    return users.map((user) => new UserResponseDto(user));
  }

  @Post('')
  async createUser(
    @Body() body: CreateUserRequestDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.add(body);
    return new UserResponseDto(user);
  }
}
