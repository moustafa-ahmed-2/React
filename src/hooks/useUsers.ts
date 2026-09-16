import { useEffect, useState } from 'react';
import { getUsers } from '../api/users.api';
import type { User } from '../types/user.types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getUsers()
      .then((data) => active && setUsers(data))
      .catch(() => active && setError('Could not load users. Try again.'))
      .finally(() => active && setIsLoading(false));

    return () => {
      active = false;
    };
  }, []);

  return { users, isLoading, error };
}
