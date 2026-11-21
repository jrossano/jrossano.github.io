import { AboutGrid } from "@/components/about-grid";
import { BlogList } from "@/components/blog-list";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SectionHeading } from "@/components/section-heading";
import { Testimonials } from "@/components/testimonials";
import { AiUse } from "@/components/ai-use";
import { AskJoe } from "@/components/ask-joe";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutGrid />
      <Projects />
      <Testimonials />
      <Experience />
      <section id="blog" aria-labelledby="blog-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
        <SectionHeading id="blog-heading" accent="blog">
          Swift
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ash sm:text-base">
          Six essays, including the Swift Essentials series, from optionals through async/await.
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <BlogList />
        </div>
        <p className="mt-6 text-center">
          <Link href="/blog/" className="text-sm font-medium text-sky hover:underline">
            Blog index
          </Link>
        </p>
      </section>
      {/* <AiUse /> */}
      {/* <AskJoe /> */}
      <Contact />
    </>
  );
}
