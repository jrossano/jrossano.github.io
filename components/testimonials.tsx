import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/content/site";

const featured = testimonials.filter((item) => item.featured);

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <SectionHeading id="testimonials-heading" accent="Joe's work">
        What people say about
      </SectionHeading>
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5">
        {featured.map((item) => (
          <figure key={item.id} className="panel p-6 sm:p-8">
            <blockquote>
              <p className="text-base leading-relaxed text-cloud sm:text-lg">&ldquo;{item.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-6 border-t border-cloud/10 pt-4">
              <p className="font-semibold text-cloud">{item.name}</p>
              <p className="text-sm text-ash">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/testimonials/" className="text-lg font-medium text-sky hover:underline">
          See more testimonials...
        </Link>
      </p>
    </section>
  );
}

export function TestimonialList({ onlyMore = false }: { onlyMore?: boolean }) {
  const items = onlyMore ? testimonials.filter((item) => !item.featured) : testimonials;
  return (
    <div className="grid grid-cols-1 gap-5">
      {items.map((item) => (
        <figure key={item.id} id={item.id} className="panel scroll-mt-28 p-6 sm:p-8">
          <blockquote>
            <p className="text-base leading-relaxed text-cloud">&ldquo;{item.quote}&rdquo;</p>
          </blockquote>
          <figcaption className="mt-5">
            <p className="font-semibold text-cloud">{item.name}</p>
            <p className="text-sm text-ash">{item.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
