

import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { ROUTES } from "../constants/routes";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <section className="mx-auto max-w-5xl text-center">

      
        <div className="rounded-2xl bg-white px-6 py-14 shadow-md">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            React + TypeScript
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            A React structure you can grow into
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            A clean and scalable project structure where every folder has
            a clear responsibility. UI components, API logic, hooks,
            utilities, pages, and shared resources all have their own place.
          </p>

          <div className="mt-8">
            <Link to={ROUTES.users}>
              <Button>See the users page</Button>
            </Link>
          </div>
        </div>

        
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Components
            </h2>

            <p className="leading-7 text-gray-600">
              Reusable UI components keep the application clean and
              consistent.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              API & Hooks
            </h2>

            <p className="leading-7 text-gray-600">
              Data access and shared logic are separated from the UI.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Easy to Scale
            </h2>

            <p className="leading-7 text-gray-600">
              The structure makes it easier to add features as the project
              grows.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

