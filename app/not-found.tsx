import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 pb-24 pt-40 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">404</p>
      <h1 className="mt-3 text-4xl font-bold text-cloud">That page is not on this site</h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-ash">
        The portfolio has Home, About, Apps, and Blog.
      </p>
      <Link href="/" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-royal px-6 text-sm font-medium text-cloud">
        Back home
      </Link>
    </div>
  );
}
