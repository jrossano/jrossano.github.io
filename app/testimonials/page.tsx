import type { Metadata } from "next";
import { Screenshots } from "@/components/screenshots";
import { engagements } from "@/content/engagements";
import { screenshots } from "@/content/screenshots";
import { testimonials } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "iOS and Mac case studies from Joe Rossano's current site and resume.",
};

export default function TestimonialsPage() {
  return (
    <div className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Testimonials</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-cloud md:text-5xl">More of Joe's Testimonials</h1>
        <p className="mt-4 text-sm leading-relaxed text-ash sm:text-base">
          Some of the testimonials Joe received while working for JPMorganChase and E-gineering.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5">
        {testimonials.map((item) => (
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
    </div>
  );
}
