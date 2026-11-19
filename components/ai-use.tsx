import { SectionHeading } from "@/components/section-heading";
import { aiNote, aiPrinciples, competencies } from "@/content/site";

const competency = competencies.find((item) => item.title === "AI-Assisted Engineering");

export function AiUse() {
  return (
    <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <SectionHeading id="approach-heading" accent="AI">
        How I use
      </SectionHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ash sm:text-base">
        {competency?.body}
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium text-cloud">{aiNote}</p>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {aiPrinciples.map((item) => (
          <article key={item.kicker} className="panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-sky">{item.kicker}</p>
            <h3 className="mt-3 text-xl font-bold leading-snug text-cloud">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ash">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
