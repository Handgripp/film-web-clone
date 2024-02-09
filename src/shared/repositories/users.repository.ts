import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserData, UserData } from 'src/users/users.types';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { AbstractUsersRepository } from './types/usersAbstract.repository';

@Injectable()
export class UsersRepository implements AbstractUsersRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create({
    email,
    username,
    password,
    userRole,
  }: CreateUserData): Promise<UserData> {
    const newUser = this.usersRepository.create({
      email,
      password,
      username,
      userRole,
    });
    const savedUser = await this.usersRepository.save(newUser);
    return savedUser;
  }

  async findOneByEmail(email: string): Promise<UserData> {
    return this.usersRepository.findOneBy({ email });
  }

  async findOneByUsername(username: string): Promise<UserData> {
    return this.usersRepository.findOneBy({ username });
  }
  async findMany(): Promise<UserData[]> {
    return this.usersRepository.find();
  }
}
