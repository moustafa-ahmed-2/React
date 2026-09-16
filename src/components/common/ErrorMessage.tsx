export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p role="alert" style={{ color: '#f87171' }}>
      {message}
    </p>
  );
}
