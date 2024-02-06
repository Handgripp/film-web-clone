import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async add(email: string, username: string, userPassword: string) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(userPassword, salt);
    const emailExist = await this.usersRepository.findOneBy({ email });
    if (emailExist) {
      throw new ConflictException('Account with this email already exists.');
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
    return userDetails;
  }
}
