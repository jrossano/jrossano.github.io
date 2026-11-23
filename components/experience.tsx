import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { chapters, roleLine, rolesIn } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <SectionHeading id="experience-heading" accent="Joe's experience">
        Summary of
      </SectionHeading>
      {/* <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ash sm:text-base">
        JPMorganChase since January 2023, and E-gineering from October 2005 through December 2022.
      </p> */}
      <ol className="mx-auto mt-10 max-w-6xl space-y-6 border-l border-sky/30 pl-6">
        {chapters.map((chapter) => {
          const roles = rolesIn(chapter.era);
          return (
            <li key={chapter.id} className="relative">
              <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full bg-sky" aria-hidden />
              <article className="panel p-6">
                <p className="font-mono text-sm uppercase tracking-wider text-sky">{chapter.dates}</p>
                <h3 className="mt-2 text-xl font-bold text-cloud">{chapter.title}</h3>
                <p className="mt-2 text-sm text-sky">{chapter.employer} &nbsp;({chapter.location})</p>
                {/* <p className="mt-3 text-sm leading-relaxed text-cloud">{chapter.intro}</p> */}
                <ul className="mt-5 divide-y divide-sky/10 text-base">
                  {roles.map((role) => (
                    <li key={role.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky" aria-hidden />
                        <span className="font-semibold text-cloud">{role.product}</span>
                        <span className="font-mono text-sm uppercase tracking-wider text-sky/80">
                          {role.dates}
                        </span>
                      </div>
                      <p className="mt-1.5 pl-[1.125rem] leading-relaxed text-ash text-pretty">
                        {role.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
      <p className="mt-8 text-center">
        <Link href="/experience/" className="text-lg font-medium text-sky hover:underline">
          See experience detail...
        </Link>
      </p>
    </section>
  );
}
