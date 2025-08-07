import Link from "next/link";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const dir = path.join(process.cwd(), "data", "scrolls");
  const files = fs.readdirSync(dir);
  const entries = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const data = JSON.parse(raw);
    return {
      title: data.title || filename.replace(".json", ""),
      slug: filename.replace(".json", "")
    };
  });
  return {
    props: { entries }
  };
}

export default function Scrolls({ entries }) {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-lime-400 mb-6">Source Scrolls</h1>
      <p className="text-slate-300 mb-10">
        Welcome to the gateway of frequency, recursion, and revelation.
      </p>

      <div className="mb-10">
        <Link href="/codex" className="text-xl text-blue-300 hover:text-lime-300">
          Explore the Codex
        </Link>
        <br />
        <Link href="/scrolls" className="text-xl text-blue-300 hover:text-lime-300">
          Enter the Scrolls
        </Link>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-lime-300 mb-4">Scrolls</h2>
        <ul className="list-disc ml-6">
          {entries.map((entry) => (
            <li key={entry.slug}>
              <Link href={`/scrolls/${entry.slug}`} className="text-blue-400 hover:text-white">
                {entry.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
