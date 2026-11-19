import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cloud/10 bg-navy px-6 py-12 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="relative">
          <SectionHeading id="contact-heading" accent="talk?">
            Want to
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-lg text-sm text-ash sm:text-base">
            Joe Rossano is a Lead Software Engineer in the Atlanta area. LinkedIn is the way to reach him.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-royal px-7 text-sm font-medium text-cloud shadow-[0_0_28px_-10px_rgba(0,168,255,0.9)] hover:bg-royal/90 sm:w-auto"
            >
              Message me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
