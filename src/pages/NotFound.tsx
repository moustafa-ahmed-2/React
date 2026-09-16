import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function NotFound() {
  return (
    <section className="container">
      <h1>Page not found</h1>
      <Link to={ROUTES.home}>Back to home</Link>
    </section>
  );
}
