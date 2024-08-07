import { CreateUserData, UserData } from 'src/users/users.types';

export abstract class AbstractUsersRepository {
  abstract create(data: CreateUserData): Promise<UserData>;
  abstract activeUser(email: string): Promise<UserData>;
  abstract findOneByEmail(email: string): Promise<UserData>;
  abstract findOneByUsername(username: string): Promise<UserData>;
  abstract findMany(): Promise<UserData[]>;
}
