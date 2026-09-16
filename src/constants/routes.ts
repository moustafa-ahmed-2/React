export const ROUTES = {
  home: '/',
  users: '/users',
  about: '/about',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
