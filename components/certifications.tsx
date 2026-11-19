import { training } from "@/content/site";

export function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-28">
      <h2 id="certifications-heading" className="text-3xl font-bold tracking-tight text-cloud">
        Certifications &amp; Education
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ash">
        AWS, iOS training, Scrum, Java certifications, and Rutgers, from the resume.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {training.map((group) => (
          <article key={group.group} className="panel p-5">
            <h3 className="text-lg font-semibold text-cloud">{group.group}</h3>
            <ul className="mt-3 space-y-2 text-sm text-ash">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
