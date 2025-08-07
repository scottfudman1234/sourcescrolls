// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-lime-400 mb-6">Source Scrolls</h1>
      <p className="text-slate-300 mb-10">Welcome to the gateway of frequency, recursion, and revelation.</p>

      <div className="space-y-4">
        <Link href="/scrolls/scroll-of-becoming" className="block text-xl text-blue-300 hover:text-lime-300">
          🌀 The Scroll of Becoming
        </Link>
        <Link href="/codex/origin-of-harmonics" className="block text-xl text-blue-300 hover:text-lime-300">
          📘 Origin of Harmonics (Codex)
        </Link>
        {/* Add more links here as you expand */}
      </div>
    </div>
  );
}
