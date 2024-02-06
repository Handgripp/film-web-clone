export type CreateUserData = {
  email: string;
  password: string;
  username: string;
};

export type UserData = {
  id: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  created_at: Date;
  updated_at: Date;
};
