"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function DemoPptxLoginForm({ nextPath }: { nextPath: string }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const expectedUsername =
    process.env.NEXT_PUBLIC_DEMO_PPTX_USERNAME ?? "metabee-demo";
  const expectedPassword =
    process.env.NEXT_PUBLIC_DEMO_PPTX_PASSWORD ?? "MetaBee@2026";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (
        username.trim() !== expectedUsername ||
        password !== expectedPassword
      ) {
        setError("Invalid username or password.");
        return;
      }

      sessionStorage.setItem("metabee_demo_auth", "ok");
      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block text-sm text-zinc-300" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          required
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0b429]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-zinc-300" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0b429]"
        />
      </div>

      {error ? <p className="text-sm text-red-400">{error}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#f0b429] py-2.5 font-semibold text-black hover:bg-[#e6a800] disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
