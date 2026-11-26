import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/content/site";

export function Contact() {
  return (
    <section aria-labelledby="contact" className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-cloud/10 bg-navy px-6 pb-12 pt-6 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="relative">
          <SectionHeading id="contact" accent="talk?">
            Want to
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-lg text-sm text-ash sm:text-base">
            Joe Rossano is a Lead Software Engineer in the Atlanta area. Email or message Joe on LinkedIn.
          </p>
          <div className="mt-8 flex flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center justify-center rounded-lg bg-royal px-7 text-sm sm:w-60 font-medium text-cloud shadow-[0_0_28px_-10px_rgba(0,168,255,0.9)] hover:bg-royal/90"
            >
              Email me directly
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-royal px-7 text-sm sm:w-60 font-medium text-cloud shadow-[0_0_28px_-10px_rgba(0,168,255,0.9)] hover:bg-royal/90"
            >
              Message me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
