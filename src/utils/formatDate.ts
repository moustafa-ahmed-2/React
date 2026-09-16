export function formatDate(value: string | Date, locale = 'en-US'): string {
  const date = typeof value === 'string' ? new Date(value) : value;

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}
