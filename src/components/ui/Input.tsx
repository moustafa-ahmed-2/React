import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, ...props }: InputProps) {
  const inputId = id ?? props.name ?? label;

  return (
    <label htmlFor={inputId} style={{ display: 'grid', gap: '0.35rem' }}>
      <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{label}</span>
      <input
        id={inputId}
        {...props}
        style={{
          padding: '0.5rem 0.75rem',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          color: 'var(--text)',
          font: 'inherit',
        }}
      />
    </label>
  );
}
