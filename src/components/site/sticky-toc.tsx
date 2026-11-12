"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Heading = { id: string; label: string; level: string };

export function StickyToc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) return;
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="space-y-8 lg:sticky lg:top-28">
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink/70">
          On this page
        </p>
        <nav className="mt-4 border-l border-ink/10">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "relative block border-l-2 py-2 pl-4 text-[0.78rem] leading-snug transition-all",
                heading.level === "h3" ? "ml-2 pl-3 text-[0.72rem]" : "",
                active === heading.id
                  ? "-ml-px border-clay font-medium text-ink"
                  : "border-transparent text-ink/70 hover:text-ink/80",
              )}
            >
              {heading.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-forest p-6 text-paper">
        <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full border border-paper/10" />
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-champagne/80">
          Have a question?
        </p>
        <p className="mt-3 font-display text-2xl leading-tight">
          A real person is happy to help.
        </p>
        <p className="mt-2 text-[0.78rem] leading-relaxed text-paper/60">
          Call the office during business hours or send us a note — we&apos;ll take it
          from there.
        </p>
        <a
          href={site.phone.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-paper"
        >
          <Phone className="size-3.5" />
          {site.phone.plain}
        </a>
        <a
          href="/appointment"
          className="mt-3 flex items-center gap-2 text-[0.75rem] text-paper/60 transition-colors hover:text-paper"
        >
          Request an appointment
          <ArrowUpRight className="size-3" />
        </a>
      </div>
    </div>
  );
}
