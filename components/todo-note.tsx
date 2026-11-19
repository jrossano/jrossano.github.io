import type { ReactNode } from "react";

export function TodoNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 rounded-xl border border-dashed border-sky/70 bg-sky/10 px-3 py-2 text-sm leading-relaxed text-cloud">
      <span className="mb-1 block font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky">
        TODO
      </span>
      {children}
    </p>
  );
}
