import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "/components/ui/button";

export default function CodexEntryPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    async function fetchEntry() {
      try {
        const res = await fetch(`/api/codex?slug=${slug}`);
        if (!res.ok) throw new Error("Failed to fetch entry");
        const data = await res.json();
        setEntry(data.entry);
      } catch (err) {
        console.error(err);
        setError("Failed to load the Codex entry.");
      }
    }
    fetchEntry();
  }, [slug]);

  if (error) {
    return (
      <div className="p-8 text-red-400 text-center">
        {error}
        <br />
        <Link href="/"><Button className="mt-4">Back to Home</Button></Link>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="p-8 text-slate-300 text-center">
        Loading harmonic resonance...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
      <h1 className="text-4xl font-bold mb-6 text-lime-300">{entry.title}</h1>
      <p className="text-slate-400 mb-10">{entry.summary}</p>
      <div className="prose prose-invert max-w-4xl mx-auto text-white">
        {entry.content?.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/"><Button variant="outline">Return to Codex</Button></Link>
      </div>
    </div>
  );
}
