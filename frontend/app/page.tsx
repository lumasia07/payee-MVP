// src/app/page.tsx
"use client";

import { gql, useQuery } from "@apollo/client";

const HELLO_QUERY = gql`
  query {
    hello
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">API says: {data.hello}</h1>
    </main>
  );
}
