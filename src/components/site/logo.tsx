import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
};

export function Logo({ className, tone = "dark", compact = false }: LogoProps) {
  const ink = tone === "dark" ? "#11241f" : "#fbf8f2";
  return (
    <Link
      href="/"
      aria-label="Polished Dental — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        className={cn(
          "relative grid shrink-0 place-items-center rounded-full border transition-transform duration-500 group-hover:rotate-6",
          tone === "dark" ? "border-ink/25" : "border-paper/30",
          compact ? "size-9" : "size-11",
        )}
      >
        <svg
          viewBox="0 0 44 44"
          aria-hidden="true"
          className={compact ? "size-5" : "size-6"}
          fill="none"
          stroke={ink}
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M8 22c2.4 7.4 7.8 11.4 14 11.4S33.6 29.4 36 22" />
          <path d="M12.5 17.6c2-4.4 5.5-6.8 9.5-6.8s7.5 2.4 9.5 6.8" opacity=".45" />
          <path d="M20.4 26.2c.8 1.6 2.4 2.5 4.2 2.2" opacity=".45" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-clay" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display tracking-[-0.045em]",
            compact ? "text-xl" : "text-[1.6rem]",
            tone === "dark" ? "text-ink" : "text-paper",
          )}
        >
          Polished
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[0.5rem] uppercase tracking-[0.42em]",
            compact ? "ml-0.5" : "ml-1",
            tone === "dark" ? "text-ink/70" : "text-paper/60",
          )}
        >
          Dental
        </span>
      </span>
    </Link>
  );
}
