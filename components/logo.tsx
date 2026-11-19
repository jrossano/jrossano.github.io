import { profile } from "@/content/site";

type LogoProps = {
  className?: string;
  /** When the name is visible beside the mark, the image is decorative. */
  labelled?: boolean;
};

export function Logo({ className = "h-9 w-9", labelled = false }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/jr-logo-app-icon-transparent.png"
      alt={labelled ? "" : profile.name}
      width={512}
      height={512}
      className={className}
    />
  );
}
