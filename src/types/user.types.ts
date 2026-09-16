export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'member';

export type UserPayload = Omit<User, 'id'>;
