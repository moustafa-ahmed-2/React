import { apiClient } from './axios';
import { userListSchema } from '../schemas/user.schema';
import type { User } from '../types/user.types';

export async function getUsers(): Promise<User[]> {
  const { data } = await apiClient.get('/users');
  return userListSchema.parse(data);
}

export async function getUserById(id: number): Promise<User> {
  const { data } = await apiClient.get(`/users/${id}`);
  return data;
}
