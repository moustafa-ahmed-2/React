import type { ButtonHTMLAttributes, CSSProperties } from 'react';

type Variant = 'primary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const styles: Record<Variant, CSSProperties> = {
  primary: { background: 'var(--accent)', color: '#0c1512', border: 'none' },
  ghost: { background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)' },
};

export default function Button({ variant = 'primary', style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: 'var(--radius)',
        cursor: 'pointer',
        font: 'inherit',
        ...styles[variant],
        ...style,
      }}
    />
  );
}
