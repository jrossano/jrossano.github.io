import type { Metadata } from "next";
import { Screenshots } from "@/components/screenshots";
import { engagements } from "@/content/engagements";
import { screenshots } from "@/content/screenshots";
import { apps } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "iOS and Mac case studies from Joe Rossano's current site and resume.",
};

export default function AppsPage() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Projects</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">More of Joe&apos;s Projects</h1>
        <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
          Some of the iOS apps Joe developed for JPMorganChase and for clients while working as a consultant with E-gineering.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5">
        {apps.map((app) => {
          const engagement = engagements[app.id];
          const shots = screenshots[app.id] ?? [];
          return (
            <article key={app.id} id={app.id} className="panel scroll-mt-28 overflow-hidden">
              <Screenshots shots={shots} label={app.name} size="lg" />
              <div className="p-6">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="text-2xl font-bold text-cloud">{app.name}</h2>
                  {app.note ? <p className="text-xs uppercase tracking-wider text-sky">{app.note}</p> : null}
                </div>
                {/* {engagement ? (
                  <p className="mt-2 text-sm text-sky">
                    {engagement.role}
                    {engagement.client ? ` · ${engagement.client}` : ""} · {engagement.dates}
                  </p>
                ) : null} */}
                <p className="mt-3 text-sm leading-relaxed text-ash sm:text-base">{app.body}</p>
                {engagement ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ash">
                    {engagement.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {app.technologies.map((tech) => (
                    <li key={tech} className="rounded-full bg-midnight px-2.5 py-1 text-xs text-cloud">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
