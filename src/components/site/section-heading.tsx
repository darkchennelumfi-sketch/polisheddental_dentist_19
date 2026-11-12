import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <p className={cn("eyebrow", tone === "light" ? "text-clay-deep" : "text-champagne")}>
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-5 font-display text-[clamp(2.2rem,4.5vw,4.2rem)] leading-[0.98] tracking-[-0.04em]",
            tone === "light" ? "text-ink" : "text-paper",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.95rem] leading-relaxed",
              tone === "light" ? "text-ink/70" : "text-paper/60",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {link ? (
        <Link
          href={link.href}
          className={cn(
            "link-underline shrink-0 self-start pb-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] md:self-auto",
            tone === "light" ? "text-ink/70 hover:text-ink" : "text-paper/60 hover:text-paper",
          )}
        >
          {link.label}
          <ArrowUpRight className="size-3.5" />
        </Link>
      ) : null}
    </Reveal>
  );
}
