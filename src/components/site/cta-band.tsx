import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

export function CtaBand({
  eyebrow = "Your next visit",
  title = "A brighter smile starts with a simple hello.",
  description = "Call the office or send an appointment request. We'll help you find the right time and answer anything on your mind.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-paper">
      <div className="pointer-events-none absolute -left-40 top-1/2 size-[38rem] -translate-y-1/2 rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-[26rem] -translate-y-1/2 rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(199,165,107,0.18),transparent_60%)]" />
      <div className="shell relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <Reveal>
          <p className="eyebrow text-champagne">{eyebrow}</p>
          <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92] tracking-[-0.045em]">
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-paper/60">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="light" size="lg">
              <Link href="/appointment">
                Request an appointment
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost-light" size="lg">
              <a href={site.phone.href}>
                <Phone className="size-4" />
                {site.phone.plain}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-md md:p-8">
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-champagne/80">
              Visit us
            </p>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-paper/70 transition-colors hover:text-paper"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-champagne" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
              <div className="flex items-start gap-3 text-paper/70">
                <Clock className="mt-0.5 size-4 shrink-0 text-champagne" />
                <span>
                  Monday–Thursday: 7:00 a.m.–4:00 p.m.
                  <br />
                  Friday: morning emergency calls
                </span>
              </div>
            </div>
            <div className="mt-6 border-t border-paper/15 pt-5">
              <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-paper/60">
                Summer hours · June–August
              </p>
              <p className="mt-2 text-[0.8rem] text-paper/60">
                Monday–Thursday: 7:00 a.m.–3:30 p.m. · Friday: morning emergency
                calls
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
