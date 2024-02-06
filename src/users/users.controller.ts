import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('')
  getAll() {
    return this.usersService.getAll();
  }

  @Post('')
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.add(body.email, body.username, body.password);
  }
}
