import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal, RevealLine } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  meta?: string;
  className?: string;
  priority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  crumbs,
  children,
  meta,
  className,
  priority = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-ink/10 bg-bone",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-40 top-0 size-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,123,81,0.16),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(174,189,170,0.35),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />

      <div className="shell relative grid items-center gap-12 pb-14 pt-10 md:pb-20 md:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div className="relative z-10">
          <Reveal y={12}>
            <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/70">
              {crumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 ? <ChevronRight className="size-3 text-ink/70" /> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-clay-deep">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink/70">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>

          <Reveal y={16}>
            <p className="eyebrow text-clay-deep">{eyebrow}</p>
          </Reveal>

          <h1 className="mt-5 font-display text-[clamp(3rem,7.2vw,6.2rem)] leading-[0.9] tracking-[-0.045em] text-ink">
            <RevealLine>{title}</RevealLine>
          </h1>

          <Reveal delay={0.12} y={18}>
            <p className="mt-7 max-w-[34rem] text-[1.02rem] leading-relaxed text-ink/70">
              {description}
            </p>
          </Reveal>

          {children ? (
            <Reveal delay={0.2} y={16} className="mt-8">
              {children}
            </Reveal>
          ) : null}

          {meta ? (
            <Reveal delay={0.24} y={12}>
              <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/70">
                {meta}
              </p>
            </Reveal>
          ) : null}
        </div>

        <Reveal delay={0.16} y={34} className="relative">
          <div className="relative mx-auto w-full max-w-[26rem] lg:ml-auto lg:mr-0">
            <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full border border-ink/15" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 size-28 rounded-full border border-clay/30" />
            <div className="pointer-events-none absolute -right-4 top-10 size-2.5 rounded-full bg-clay" />
            <div className="relative overflow-hidden rounded-t-[16rem] rounded-b-[2rem] border border-ink/10 bg-mist shadow-[0_40px_90px_-45px_rgba(17,36,31,0.45)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  priority={priority}
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 rounded-full border border-ink/10 bg-paper/90 px-4 py-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink/70 shadow-sm backdrop-blur-md sm:left-8">
              Polished Dental · Bismarck
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
