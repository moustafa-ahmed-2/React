import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(['admin', 'member']).catch('member'),
});

export const userListSchema = z.array(userSchema);

export type UserSchema = z.infer<typeof userSchema>;
