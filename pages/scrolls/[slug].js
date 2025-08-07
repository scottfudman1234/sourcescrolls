import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScrollEntryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    async function fetchEntry() {
      try {
        const res = await fetch(`/api/scrolls?slug=${slug}`);
        if (!res.ok) throw new Error("Failed to fetch scroll entry");
        const data = await res.json();
        setEntry(data.entry);
      } catch (err) {
        console.error(err);
        setError("Failed to load the Scroll entry.");
      }
    }
    fetchEntry();
  }, [slug]);

  if (error) {
    return (
      <div className="p-8 text-red-400 text-center">
        {error}
        <br />
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="p-8 text-slate-300 text-center">
        Loading sacred scrolls from the ether...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-blue-300">{entry.title}</h1>
      <p className="text-slate-400 mb-10">{entry.summary}</p>
      <div className="prose prose-invert max-w-4xl mx-auto text-white">
        {entry.content?.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/">
          <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
            Return to Scroll Index
          </button>
        </Link>
      </div>
    </div>
  );
}
