import Link from "next/link";
import { Certifications } from "@/components/certifications";
import { SectionHeading } from "@/components/section-heading";
import { chapters, roleLine, rolesIn } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <SectionHeading id="experience-heading" accent="experience">
        Work
      </SectionHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ash sm:text-base">
        JPMorganChase since January 2023, and E-gineering from October 2005 through December 2022. Full bullets are on About.
      </p>
      <ol className="mx-auto mt-10 max-w-3xl space-y-6 border-l border-sky/30 pl-6">
        {chapters.map((chapter) => {
          const roles = rolesIn(chapter.era);
          return (
            <li key={chapter.id} className="relative">
              <span className="absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full bg-sky" aria-hidden />
              <article className="panel p-6">
                <p className="font-mono text-xs uppercase tracking-wider text-sky">{chapter.dates}</p>
                <h3 className="mt-2 text-xl font-bold text-cloud">{chapter.title}</h3>
                <p className="text-sm text-ash">
                  {chapter.employer} · {chapter.location}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cloud">{chapter.intro}</p>
                <ul className="mt-4 space-y-2 text-sm text-ash">
                  {roles.map((role) => (
                    <li key={role.id}>
                      {chapter.era === "chase" ? (
                        <>
                          <span className="font-medium text-cloud">
                            {role.product} · {role.dates}
                          </span>
                          <span className="mt-1 block">{role.summary}</span>
                        </>
                      ) : (
                        roleLine(role)
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-center">
        <Link href="/about/#experience" className="text-sm font-medium text-sky hover:underline">
          Full detail for every role
        </Link>
      </p>
      <div className="mx-auto mt-16 max-w-3xl">
        <Certifications />
      </div>
    </section>
  );
}
