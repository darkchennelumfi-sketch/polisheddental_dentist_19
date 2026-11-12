import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Printer,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, pages, site } from "@/lib/site";

const meta = pageMeta["/office/map-and-directions"];
const page = pages["office/map-and-directions"];

export const metadata: Metadata = {
  title: "Map & Directions",
  description: meta.description,
  alternates: { canonical: "/office/map-and-directions" },
};

export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Easy to find. Easy to reach."
        description={meta.description}
        image={page.banner}
        imageAlt="Polished Dental patients in Bismarck"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Map & Directions" },
        ]}
        priority
      >
        <a
          href={site.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-pine"
        >
          <Navigation className="size-4" />
          Get directions
        </a>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-mist">
              <iframe
                src={site.mapUrl}
                title="Map to Polished Dental at 1700 E. Interstate Ave., Bismarck, ND"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[24rem] w-full border-0 md:h-[34rem]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-forest/20 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-paper/30 bg-forest/75 px-4 py-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-paper/85 backdrop-blur-md">
                1700 E. Interstate Ave. · Bismarck
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-ink/10 bg-bone/50 p-6 md:p-8">
              <div>
                <p className="eyebrow text-clay-deep">The address</p>
                <p className="mt-5 font-display text-3xl leading-tight tracking-[-0.03em] text-ink">
                  Polished Dental
                </p>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-ink/70 transition-colors hover:text-ink"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
              </div>

              <div className="space-y-4 border-t border-ink/10 pt-6 text-sm">
                <a
                  href={site.phone.href}
                  className="flex items-center gap-3 text-ink/70 transition-colors hover:text-ink"
                >
                  <Phone className="size-4 shrink-0 text-clay-deep" />
                  {site.phone.display}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-ink/70 transition-colors hover:text-ink"
                >
                  <Mail className="size-4 shrink-0 text-clay-deep" />
                  {site.email}
                </a>
                <div className="flex items-start gap-3 text-ink/70">
                  <Clock className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                  <span>
                    Monday–Thursday: 7:00 a.m.–4:00 p.m.
                    <br />
                    Friday: morning emergency calls
                  </span>
                </div>
              </div>

              <div className="border-t border-ink/10 pt-6">
                <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink/70">
                  Summer hours · June–August
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/70">
                  Monday–Thursday: 7:00 a.m.–3:30 p.m. · Friday: morning emergency
                  calls
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-pine"
                >
                  <Navigation className="size-3.5" />
                  Open in Maps
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/20 px-5 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  Contact the office
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay-deep">Getting here</p>
            <p className="mt-5 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.03] tracking-[-0.035em] text-ink">
              Customized directions, one click away.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-[0.92rem] leading-relaxed text-ink/70">
              For customized driving directions, use the interactive map above.
              Simply click on the red indicator on the map, then click &ldquo;Get
              Directions.&rdquo; You can also switch between Map View and Satellite
              View using the view controls in the bottom-right corner, and zoom in
              or out with the + and − buttons.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-ink/10 bg-paper p-4">
                <Navigation className="size-4 text-clay-deep" />
                <p className="mt-3 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                  Driving
                </p>
                <p className="mt-1 text-[0.78rem] text-ink/70">
                  Open the map and tap the marker
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-paper p-4">
                <Phone className="size-4 text-clay-deep" />
                <p className="mt-3 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                  Calling
                </p>
                <p className="mt-1 text-[0.78rem] text-ink/70">
                  {site.phone.plain}
                </p>
              </div>
              <div className="rounded-xl border border-ink/10 bg-paper p-4">
                <Printer className="size-4 text-clay-deep" />
                <p className="mt-3 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                  Fax
                </p>
                <p className="mt-1 text-[0.78rem] text-ink/70">{site.fax}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="We'll see you on Interstate Avenue."
        description="Have a question before you come in? Call the office or send us a note — a real person will help."
      />
    </>
  );
}
