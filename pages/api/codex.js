import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "data", "codex");
  const files = fs.readdirSync(dir);
  const entries = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    return JSON.parse(raw);
  });
  res.status(200).json({ entries });
}
