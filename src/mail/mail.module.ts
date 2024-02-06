import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'emilie.howe19@ethereal.email',
          pass: 'G2GyZgAVQWPTB68Z7H',
        },
      },
      defaults: {
        from: '"No Reply" <emilie.howe19@ethereal.email>',
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
