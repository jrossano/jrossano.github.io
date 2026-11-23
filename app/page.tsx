import { AboutGrid } from "@/components/about-grid";
import { BlogList } from "@/components/blog-list";
import { BlogPosts } from "@/components/blog-posts";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Certifications } from "@/components/certifications";
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
      {/* <Experience /> */}
      <Certifications />
      <section id="blog" aria-labelledby="blog-heading" className="scroll-mt-28 px-4 py-16 sm:px-6">
        <SectionHeading id="blog-heading" accent="Joe's blog">
          Swift posts from
        </SectionHeading>
        <div className="mx-auto mt-6 max-w-6xl">
          <BlogPosts />
        </div>
      </section>
      {/* <AiUse /> */}
      {/* <AskJoe /> */}
      <Contact />
    </>
  );
}
