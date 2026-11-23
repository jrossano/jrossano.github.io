import { training } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="experience-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <SectionHeading id="experience-heading" accent="Joe's certifications">
        List of
      </SectionHeading>
      <div className="mx-auto mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-6xl">
        {training.map((group) => (
          <article key={group.group} className="panel p-5">
            <h3 className="text-lg font-semibold text-cloud">{group.group}</h3>
            <ul className="mt-3 space-y-2 text-sm text-ash">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="relative flex flex-wrap items-baseline gap-x-3 gap-y-0.5 pl-5"
                >
                  <span
                    className="absolute left-0 top-[0.45rem] h-1.5 w-1.5 rounded-full bg-sky"
                    aria-hidden
                  />
                  <span>{item.name}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-sky/80">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
