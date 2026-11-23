import type { Metadata } from "next";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Swift Essentials and async/await essays by Joe Rossano.",
};

export default function BlogPage() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Blog</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">Swift blog posts</h1>
        {/* <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
          Six posts. Swift Essentials runs from optionals through generics, and a later post covers async/await.
        </p> */}
        <div className="mt-8">
          <BlogList />
        </div>
      </div>
    </div>
  );
}
