import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "data", "scrolls");
  const files = fs.readdirSync(dir);

  const entries = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    return JSON.parse(raw);
  });

  const { slug } = req.query;

  if (slug) {
    const entry = entries.find((e) => e.slug === slug);
    if (!entry) {
      return res.status(404).json({ error: "Scroll not found" });
    }
    return res.status(200).json({ entry });
  }

  res.status(200).json({ entries });
}
