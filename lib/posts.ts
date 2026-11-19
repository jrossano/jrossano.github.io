import fs from "node:fs";
import path from "node:path";
import { posts, type BlogPost } from "@/content/site";

export function readPostMarkdown(slug: string): string {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.md`);
  return fs.readFileSync(file, "utf8");
}

export function readingTime(markdown: string): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1");
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function postBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.id === slug);
}

export function postNeighbors(slug: string): { older: BlogPost | null; newer: BlogPost | null } {
  const index = posts.findIndex((post) => post.id === slug);
  if (index === -1) return { older: null, newer: null };
  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index < posts.length - 1 ? posts[index + 1] : null,
  };
}
