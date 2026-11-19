import type { Shot } from "@/content/screenshots";

export function Screenshots({ shots, label, tall }: { shots: Shot[]; label: string; tall?: boolean }) {
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
            className={
              tall
                ? "h-80 w-auto rounded-2xl border border-cloud/10 bg-midnight sm:h-[28rem]"
                : "h-52 w-auto rounded-xl border border-cloud/10 bg-midnight sm:h-64"
            }
          />
        </li>
      ))}
    </ul>
  );
}
