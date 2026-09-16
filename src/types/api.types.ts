export interface Paginated<T> {
  items: T[];
  page: number;
  total: number;
}

export interface ApiError {
  message: string;
  status: number;
}
