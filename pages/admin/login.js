import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.ok) {
      router.push("/admin");
    } else {
      setError("Bledny login lub haslo.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-xl font-bold text-gray-900">Panel statystyk</h1>
        <p className="mt-1 text-sm text-gray-500">Zaloguj sie, aby zobaczyc dane.</p>

        <label className="mt-6 block text-sm font-medium text-gray-700">
          Login
          <input
            type="text"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>

        <label className="mt-4 block text-sm font-medium text-gray-700">
          Haslo
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </label>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-50"
        >
          {loading ? "Logowanie..." : "Zaloguj"}
        </button>
      </form>
    </main>
  );
}
