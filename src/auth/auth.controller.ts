import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() data: LoginDto) {
    return this.authService.signIn(data.email, data.password);
  }

  @HttpCode(HttpStatus.OK)
  @Get('confirm')
  confimEmail(@Query('token') token: string) {
    return this.authService.confirm(token);
  }
}
