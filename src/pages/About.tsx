



export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <section className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About
        </h1>

  <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About23
        </h1>



  <h1 className="mb-4 text-4xl font-bold text-gray-900">
          About100
        </h1>

        <p className="mb-6 text-lg leading-8 text-gray-600">
          This project is a reference application built with React and
          TypeScript. It demonstrates how to organize a codebase by
          responsibility, making the project easier to understand,
          maintain, and scale.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Clean Structure
            </h2>

            <p className="text-gray-600">
              Each part of the application has its own place and
              responsibility.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              TypeScript
            </h2>

            <p className="text-gray-600">
              TypeScript helps keep the code safer and easier to maintain.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-5">
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Scalable
            </h2>

            <p className="text-gray-600">
              The structure makes it easier to add new features as the
              project grows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
