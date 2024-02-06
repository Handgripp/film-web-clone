import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private mailService: MailService,
    private readonly jwtService: JwtService,
  ) {}
  async getAll() {
    return this.usersRepository.find();
  }
  async getOne(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
  async activator(email) {
    const user = await this.getOne(email);
    if (!user.isActive) {
      user.isActive = true;
      const savedUser = await this.usersRepository.save(user);
      return savedUser;
    } else {
      throw new ConflictException('The account is already activated');
    }
  }
  async add(email: string, username: string, userPassword: string) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userPassword, salt);
    const emailExist = await this.usersRepository.findOneBy({ email });
    if (emailExist) {
      throw new ConflictException('Account with this email already exists');
    }
    const usernameExist = await this.usersRepository.findOneBy({ username });
    if (usernameExist) {
      throw new ConflictException('Account with this username already exists.');
    }
    const newUser = this.usersRepository.create({
      email,
      password: hashPassword,
      username: username,
    });
    const savedUser = await this.usersRepository.save(newUser);
    const { password, ...userDetails } = savedUser;
    const payload = { sub: newUser.id, email: newUser.email };
    const token = await this.jwtService.signAsync(payload);
    await this.mailService.sendUserConfirmation(newUser, token);
    return userDetails;
  }
}
