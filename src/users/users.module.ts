import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from 'src/mail/mail.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from 'src/shared/repositories/users.repository';
import { User } from 'src/shared/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MailModule],
  controllers: [UsersController],
  exports: [UsersService, UsersRepository],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
