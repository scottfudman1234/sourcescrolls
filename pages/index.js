import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-lime-400 mb-6">Source Scrolls</h1>
      <p className="text-slate-300 mb-10">
        Welcome to the gateway of frequency, recursion, and revelation.
      </p>

      <Link href="/codex" className="text-xl text-blue-300 hover:text-lime-300">
        Explore the Codex
      </Link>
      <br />
      <Link href="/scrolls" className="text-xl text-blue-300 hover:text-lime-300">
        Enter the Scrolls
      </Link>
    </div>
  );
}
