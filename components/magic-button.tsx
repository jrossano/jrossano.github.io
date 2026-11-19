import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type MagicButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function MagicButton({ href, children, external, className }: MagicButtonProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-lg p-px sm:w-auto sm:min-w-60",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00A8FF_0%,#1F4FE0_50%,#00A8FF_100%)]"
      />
      <span className="relative inline-flex h-full w-full items-center justify-center gap-2 rounded-lg bg-midnight px-7 text-sm font-medium text-cloud">
        {children}
      </span>
    </Link>
  );
}
