import type { Shot } from "@/content/screenshots";

const sizeClasses = {
  sm: "h-40 w-auto rounded-xl border border-cloud/10 bg-midnight sm:h-48",
  md: "h-52 w-auto rounded-xl border border-cloud/10 bg-midnight sm:h-64",
  lg: "h-64 w-auto rounded-2xl border border-cloud/10 bg-midnight sm:h-80",
  xl: "h-80 w-auto rounded-2xl border border-cloud/10 bg-midnight sm:h-[28rem]",
};

export function Screenshots({ shots, label, size }: { shots: Shot[]; label: string; size?: "sm" | "md" | "lg"; }) {
  if (shots.length === 0) return null;
  return (
    <ul
      aria-label={`${label} screenshots`}
      className="flex gap-3 overflow-x-auto bg-midnight/50 p-4 [scrollbar-width:thin]"
    >
      {shots.map((shot) => (
        <li key={shot.src} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
            className={`${sizeClasses[size ?? "md"]} object-contain`}
          />
        </li>
      ))}
    </ul>
  );
}
