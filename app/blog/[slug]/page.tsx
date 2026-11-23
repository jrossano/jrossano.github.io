import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownPost } from "@/components/markdown-post";
import { posts } from "@/content/site";
import { postBySlug, postNeighbors, readingTime, readPostMarkdown } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  const path = `/blog/${post.id}/`;
  const image = `/blog/${post.id}/01.png`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.iso,
      url: path,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const markdown = readPostMarkdown(post.id);
  const minutes = readingTime(markdown);
  const { older, newer } = postNeighbors(post.id);

  return (
    <article className="px-4 pb-24 pt-32 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">
          <Link href="/blog/" className="hover:underline">
            Blog
          </Link>
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">{post.title}</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ash">
          <time dateTime={post.iso}>{post.date}</time>
          <span aria-hidden="true"> · </span>
          <span>{minutes}</span>
        </p>
        <div className="mt-8">
          <MarkdownPost source={markdown} />
        </div>
        <nav aria-label="More posts" className="mt-14 grid gap-4 border-t border-cloud/15 pt-8 sm:grid-cols-2">
          {older ? (
            <Link href={`/blog/${older.id}/`} className="panel block p-5 hover:border-sky/50">
              <span className="font-mono text-xs uppercase tracking-wider text-sky">Previous</span>
              <span className="mt-2 block text-lg font-semibold text-cloud">{older.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link href={`/blog/${newer.id}/`} className="panel block p-5 hover:border-sky/50 sm:text-right">
              <span className="font-mono text-xs uppercase tracking-wider text-sky">Next</span>
              <span className="mt-2 block text-lg font-semibold text-cloud">{newer.title}</span>
            </Link>
          ) : null}
        </nav>
      </div>
    </article>
  );
}
