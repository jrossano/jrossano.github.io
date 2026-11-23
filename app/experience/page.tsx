import type { Metadata } from "next";
import { roleHeading, roles } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "JPMorganChase since January 2023, and E-gineering from October 2005 through December 2022.",
};

export default function ExperiencePage() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Experience</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">Joe&apos;s Work Experience</h1>
        <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
          The details of Joe&apos;s work experience while working for JPMorganChase and E-gineering.
        </p>
      </div>
      <div className="mx-auto mt-2 grid max-w-4xl grid-cols-1">
        <ol className="mt-8 space-y-6 border-l border-sky/30 pl-6">
          {roles.map((role) => (
            <li key={role.id} className="relative">
              <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full bg-sky" aria-hidden />
              <article className="panel p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-sky">{role.dates}</p>
                <h3 className="mt-2 text-xl font-bold text-cloud">{roleHeading(role)}</h3>
                <p className="text-sm text-ash">
                  {role.employer} · {role.location}
                </p>
                {role.note ? <p className="mt-3 text-sm leading-relaxed text-cloud">{role.note}</p> : null}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ash">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
