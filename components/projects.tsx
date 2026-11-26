import Link from "next/link";
import { Screenshots } from "@/components/screenshots";
import { SectionHeading } from "@/components/section-heading";
import { screenshots } from "@/content/screenshots";
import { apps } from "@/content/site";

const featured = apps.filter((app) => app.featured);

export function Projects() {
  return (
    <section aria-labelledby="projects" className="px-4 py-16 sm:px-6">
      <SectionHeading id="projects" accent="Joe's projects">
        A small selection of
      </SectionHeading>
      {/* <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ash sm:text-base">
        Case studies from the current site, with the gallery images from that Apps page.
      </p> */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        {featured.map((app) => (
          <article key={app.id} className="panel flex flex-col overflow-hidden">
            <Screenshots shots={screenshots[app.id] ?? []} label={app.name} />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold text-cloud">{app.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">{app.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {app.technologies.map((tech) => (
                  <li key={tech} className="rounded-full bg-midnight px-2.5 py-1 text-xs text-cloud">
                    {tech}
                  </li>
                ))}
              </ul>
              <Link href={`/apps/#${app.id}`} className="mt-6 text-sm font-medium text-sky hover:underline">
                Read the case study
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/apps/" className="text-lg font-medium text-sky hover:underline">
          See more projects...
        </Link>
      </p>
    </section>
  );
}
