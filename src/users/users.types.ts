import { UserRole } from 'src/shared/entities/users.entity';

export type CreateUserData = {
  email: string;
  password: string;
  username: string;
  userRole: UserRole;
};

export type UserData = {
  id: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  userRole: UserRole;
};
