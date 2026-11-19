import { posts } from "@/content/site";
import { TodoNote } from "@/components/todo-note";

export function BlogList({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <ol className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <article className="panel p-5 sm:p-6">
              <time dateTime={post.iso} className="font-mono text-xs uppercase tracking-wider text-sky">
                {post.date}
              </time>
              <h3 className="mt-2 text-xl font-bold text-cloud">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-sky">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{post.summary}</p>
            </article>
          </li>
        ))}
      </ol>
      {compact ? null : (
        <TodoNote>
          These links open the posts on the current Weebly blog. Replace each URL in content/site.ts if the essays move.
        </TodoNote>
      )}
    </div>
  );
}
