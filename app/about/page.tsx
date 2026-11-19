import type { Metadata } from "next";
import { Certifications } from "@/components/certifications";
import { TestimonialList } from "@/components/testimonials";
import { roleHeading, roles } from "@/content/experience";
import { competencies, profile } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Experience, competencies, certifications, and recommendations published by Joe Rossano.",
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">About</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">{profile.name}</h1>
        <p className="mt-6 text-base leading-relaxed text-cloud">{profile.bio}</p>
      </div>

      <section id="experience" aria-labelledby="roles-heading" className="mx-auto mt-16 max-w-3xl scroll-mt-28">
        <h2 id="roles-heading" className="text-3xl font-bold text-cloud">
          Experience
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          Every role on the resume, newest first. JPMorganChase is January 2023 to the present. E-gineering is October
          2005 through December 2022, in Indianapolis.
        </p>
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
      </section>

      <section aria-labelledby="competencies-heading" className="mx-auto mt-16 max-w-5xl">
        <h2 id="competencies-heading" className="text-3xl font-bold text-cloud">
          Core competencies
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {competencies.map((item) => (
            <article key={item.title} className="panel p-5">
              <h3 className="text-lg font-semibold text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="recommendations" aria-labelledby="more-recommendations" className="mx-auto mt-16 max-w-3xl scroll-mt-28">
        <h2 id="more-recommendations" className="text-3xl font-bold text-cloud">
          More recommendations
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ash">
          These four recommendations are published on the current About page, alongside the three featured on the home page.
        </p>
        <div className="mt-6">
          <TestimonialList onlyMore />
        </div>
      </section>

      <div className="mx-auto mt-16 max-w-3xl">
        <Certifications />
      </div>
    </div>
  );
}
