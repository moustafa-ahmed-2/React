import type { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div
      style={{
        border: '1px dashed var(--border)',
        borderRadius: 'var(--radius)',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      {description && <p style={{ color: 'var(--muted)' }}>{description}</p>}
      {action}
    </div>
  );
}
