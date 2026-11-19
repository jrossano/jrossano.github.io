import Link from "next/link";
import { Logo } from "@/components/logo";
import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-cloud/10 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 pr-20 sm:flex-row sm:items-center sm:pr-40">
        <Link href="/" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <Logo className="h-10 w-10 rounded-xl" labelled />
          <span>
            <span className="block text-sm font-semibold text-cloud">{profile.name}</span>
            <span className="block text-xs text-ash">{profile.role}</span>
          </span>
        </Link>
        <p className="text-sm text-ash">© {new Date().getFullYear()} {profile.name}</p>
        <a href={profile.linkedin} className="text-sm font-medium text-sky hover:underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
