"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { profile } from "@/content/site";

const links = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "testimonials", label: "Testimonials" },
  { href: "experience", label: "Experience" },
  { href: "certifications", label: "Certifications" },
  { href: "blog", label: "Blog" },
  { href: "contact", label: "Contact" },

  // { href: "/blog/", label: "Blog", page: true },
  // { href: "ask-joe", label: "Ask Joe" },
];

function isHome(pathname: string) {
  return pathname === "/" || pathname === "";
}

export function Nav() {
  const pathname = usePathname() || "/";
  const home = isHome(pathname);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:top-6 sm:px-6">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center gap-3 overflow-x-auto rounded-full border border-cloud/15 bg-midnight/90 px-3 py-2 shadow-[0_8px_30px_-12px_rgba(0,168,255,0.45)] backdrop-blur-md sm:px-4"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full pr-1"
          aria-label={`${profile.name}, home`}
        >
          <Logo className="h-9 w-9 rounded-[10px]" labelled />
          <span className="hidden text-sm font-semibold tracking-tight text-cloud sm:inline">
            {profile.name}
          </span>
        </Link>
        <ul className="flex items-center gap-1 [mask-image:linear-gradient(90deg,#000_calc(100%-1.5rem),transparent)] sm:gap-2 sm:[mask-image:none]">
          {links.map((link) => {
            const href = link.page ? link.href : home ? `#${link.href}` : `/#${link.href}`;
            const current = link.page ? pathname.startsWith(link.href.replace(/\/$/, "")) : false;
            return (
              <li key={link.label}>
                <Link
                  href={href}
                  aria-current={current ? "page" : undefined}
                  className="block whitespace-nowrap rounded-full px-2.5 py-1.5 text-xs font-medium text-ash hover:text-cloud sm:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
