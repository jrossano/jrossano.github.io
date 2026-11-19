import { MagicButton } from "@/components/magic-button";
import { profile } from "@/content/site";

function HeadlineWords({ text, accent, start }: { text: string; accent?: boolean; start: number }) {
  const words = text.split(" ").filter(Boolean);
  return words.map((word, index) => (
    <span
      key={`${word}-${index}`}
      className={accent ? "word-in text-sky" : "word-in text-cloud"}
      style={{ animationDelay: `${(start + index) * 22}ms` }}
    >
      {word}{" "}
    </span>
  ));
}

export function Hero() {
  const leadCount = profile.headlineLead.split(" ").filter(Boolean).length;
  return (
    <header className="relative overflow-hidden px-5 pb-6 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,#000_72%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-sky sm:text-sm">
          {profile.eyebrow}
        </p>
        <h1 className="max-w-4xl text-[1.65rem] font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]">
          <HeadlineWords text={profile.headlineLead} start={0} />
          <HeadlineWords text={profile.headlineAccent} accent start={leadCount} />
        </h1>
        <figure className="relative mt-8">
          <div
            className="pointer-events-none absolute inset-0 scale-125 rounded-full bg-sky/25 blur-2xl"
            aria-hidden
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/jr-logo-app-icon-transparent.png"
            alt="JR monogram"
            width={1024}
            height={1024}
            className="relative h-28 w-28 rounded-[1.75rem] shadow-[0_0_48px_-8px_rgba(0,168,255,0.9)] sm:h-36 sm:w-36"
          />
        </figure>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <MagicButton href="#projects">View selected work</MagicButton>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-sky/50 px-7 text-sm font-medium text-cloud hover:bg-navy sm:w-auto"
          >
            Message me on LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
