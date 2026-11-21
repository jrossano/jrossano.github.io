import Link from "next/link";
import { Globe } from "@/components/globe";
import { TechStack } from "@/components/tech-stack";
import { competencies, profile } from "@/content/site";

const accessibility = competencies.find((item) => item.title === "Accessibility");
const architecture = competencies.find((item) => item.title === "Architecture & Engineering Practices");

export function AboutGrid() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
      <h2 id="about-heading" className="sr-only">
        About {profile.name}
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-6">
        <article className="panel group relative overflow-hidden p-6 md:col-span-4 md:p-8">
          <p className="text-sm text-ash">About Joe</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cloud sm:text-base">{profile.bio}</p>
          <p className="mt-6 max-w-xl text-2xl font-bold leading-snug text-cloud sm:text-3xl">
            Focused on modern Swift architecture, accessible design, and building teams that ship reliably.
          </p>
          <Link href="/about/" className="mt-6 inline-flex text-sm font-medium text-sky hover:underline">
            Experience, certifications, and more recommendations
          </Link>
        </article>

        <article className="panel relative flex min-h-72 flex-col overflow-hidden p-6 md:col-span-2">
          <p className="text-sm text-ash">Drag the globe</p>
          <h3 className="mt-2 max-w-[14rem] text-xl font-bold text-cloud sm:text-2xl">
            Currently based in Atlanta, Georgia
          </h3>
          <div className="relative mx-auto mt-2 aspect-square w-full max-w-[260px]">
            <Globe />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-cloud sm:text-base">Lived and worked across the U.S. in Connecticut, Florida, Georgia, Indiana, Minnesota, New Jersey, and Oregon.</p>
        </article>

        <article className="panel p-6 md:col-span-3">
          <p className="text-sm text-ash">Skills and core competencies</p>
          <h3 className="mt-2 text-2xl font-bold text-cloud sm:text-3xl">My tech stack</h3>
          <TechStack />
        </article>

        <article className="panel relative overflow-hidden p-6 md:col-span-3">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
          <div className="relative">
            <p className="inline-flex rounded-full bg-amber px-3 py-1 text-xs font-semibold text-midnight">
              Currently building
            </p>
            <p className="mt-4 text-sm text-ash">Inside my latest R&amp;D</p>
            <h3 className="mt-2 text-2xl font-bold text-cloud sm:text-3xl">FairDose</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cloud">{profile.fairdoseSummary}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cloud">{profile.fairdoseDescription}</p>
            <a
              href={profile.fairdose}
              className="mt-4 inline-flex text-sm font-medium text-sky hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              fairdose.app
            </a>
          </div>
        </article>

        <article className="panel p-6 md:col-span-2">
          <p className="text-sm text-ash">Accessibility</p>
          <h3 className="mt-2 text-xl font-bold leading-snug text-cloud">Accessible by default, not an afterthought</h3>
          <p className="mt-3 text-sm leading-relaxed text-ash">{accessibility?.body}</p>
        </article>

        <article className="panel p-6 md:col-span-2">
          <p className="text-sm text-ash">Architecture</p>
          <h3 className="mt-2 text-xl font-bold leading-snug text-cloud">Championing modern Swift practices</h3>
          <p className="mt-3 text-sm leading-relaxed text-ash">{architecture?.body}</p>
        </article>

    <article className="panel flex flex-col justify-between bg-[linear-gradient(160deg,#1F4FE0_0%,#0E1A4F_70%)] p-6 md:col-span-2">
      <div>
        <h3 className="text-2xl font-bold leading-snug text-cloud">Want to talk?</h3>
        <p className="mt-3 text-sm text-cloud/90">Email or message me on LinkedIn.</p>
      </div>

      <div className="mt-6 flex flex-col gap-2.5">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-midnight px-4 text-sm font-medium text-cloud"
        >
          Email me directly
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-midnight px-4 text-sm font-medium text-cloud"
        >
          Message me on LinkedIn
        </a>
      </div>
    </article>

      </div>
    </section>
  );
}
