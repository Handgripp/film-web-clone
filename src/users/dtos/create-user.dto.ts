import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'a@a.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'kamil' })
  @IsString()
  username: string;

  @ApiProperty({ example: '1234' })
  @IsString()
  password: string;
}
