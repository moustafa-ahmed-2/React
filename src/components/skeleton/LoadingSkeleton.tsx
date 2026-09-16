interface LoadingSkeletonProps {
  rows?: number;
}

export default function LoadingSkeleton({ rows = 3 }: LoadingSkeletonProps) {
  return (
    <div aria-busy="true" style={{ display: 'grid', gap: '0.6rem' }}>
      {Array.from({ length: rows }, (_, index) => (
        <div
          key={index}
          style={{
            height: '2.75rem',
            borderRadius: 'var(--radius)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        />
      ))}
    </div>
  );
}
