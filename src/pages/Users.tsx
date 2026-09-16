
import React from "react";

export default function Users() {
  const users = [
    {
      id: 1,
      name: "Ahmed Ali",
      email: "ahmed@gmail.com",
    },
    {
      id: 2,
      name: "Mostafa Mohamed",
      email: "mostafa@gmail.com",
    },
    {
      id: 3,
      name: "Omar Hassan",
      email: "omar@gmail.com",
    },
    {
      id: 4,
      name: "Youssef Ahmed",
      email: "youssef@gmail.com",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-8 py-10">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Users
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-500">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
