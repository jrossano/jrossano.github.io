import Link from "next/link";
import { posts } from "@/content/site";

export function BlogList() {
  return (
    <ol className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <article className="panel p-5 sm:p-6">
            <time dateTime={post.iso} className="font-mono text-xs uppercase tracking-wider text-sky">
              {post.date}
            </time>
            <h3 className="mt-2 text-xl font-bold text-cloud">
              <Link href={`/blog/${post.id}/`} className="hover:text-sky">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ash">{post.summary}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}
