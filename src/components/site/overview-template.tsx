import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCard } from "@/components/site/service-card";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { serviceGroups, site } from "@/lib/site";

type GroupKey = "office" | "patient" | "treatment" | "cosmetic" | "pediatric";

const meta: Record<
  GroupKey,
  {
    title: string;
    heroTitle: string;
    heroImage: string;
    intro: string;
    facts: { label: string; value: string }[];
  }
> = {
  office: {
    title: "Office",
    heroTitle: "The people behind the practice.",
    heroImage: "/images/dirk-resized.jpg",
    intro:
      "Thank you for visiting our website. We hope you find it helpful and informative — and we're always happy to answer a question by phone. Get to know the doctors, the team, and the details that make a visit to Polished Dental feel a little different.",
    facts: [
      { label: "In Bismarck", value: "Since 1985" },
      { label: "Doctors", value: "Three" },
      { label: "Referrals", value: "Mostly word of mouth" },
    ],
  },
  patient: {
    title: "Patient",
    heroTitle: "Everything you need, before you arrive.",
    heroImage: "/images/william1-resized.jpg",
    intro:
      "A first visit, a question about brushing, or a form you'd rather finish at home — this is where the practical details live. If you can't find what you're looking for, call the office. A real person will help.",
    facts: [
      { label: "First visit", value: "Up to two hours" },
      { label: "Forms", value: "Online portal" },
      { label: "Emergencies", value: "Call the office" },
    ],
  },
  treatment: {
    title: "Treatment",
    heroTitle: "Modern care, thoughtfully delivered.",
    heroImage: "/images/monsignor-shea-resized.jpg",
    intro:
      "From a routine cleaning to implants and one-visit CEREC crowns, we care for the health and function of your smile with modern tools and a conservative approach. You'll always understand what we recommend and why.",
    facts: [
      { label: "CEREC crowns", value: "One visit" },
      { label: "Implant consults", value: "Complimentary" },
      { label: "Care plan", value: "Built around you" },
    ],
  },
  cosmetic: {
    title: "Cosmetic Dentistry",
    heroTitle: "A smile that still feels like you.",
    heroImage: "/images/christina-and-brent-resized.jpg",
    intro:
      "The best cosmetic dentistry is subtle. We refine shape, shade, and symmetry with a light hand — always starting with the health of your smile and designing toward a result that looks natural, not manufactured.",
    facts: [
      { label: "Whitening", value: "KöR professional" },
      { label: "Restorations", value: "Metal-free options" },
      { label: "Planning", value: "Personalized" },
    ],
  },
  pediatric: {
    title: "Pediatric Dentistry",
    heroTitle: "Gentle starts for growing smiles.",
    heroImage: "/images/boston-and-lincoln-45.jpg",
    intro:
      "Children deserve a dental home that feels safe, calm, and even a little fun. We take the time to build trust, explain things at their level, and help parents feel confident about the habits happening at home.",
    facts: [
      { label: "First visits", value: "Patient & gentle" },
      { label: "Prevention", value: "Sealants" },
      { label: "Comfort", value: "Nitrous oxide" },
    ],
  },
};

export function OverviewTemplate({
  group,
  children,
}: {
  group: GroupKey;
  children?: React.ReactNode;
}) {
  const content = meta[group];
  const services = serviceGroups[group];

  return (
    <>
      <PageHero
        eyebrow={content.title}
        title={content.heroTitle}
        description={services.description}
        image={content.heroImage}
        crumbs={[
          { label: "Home", href: "/" },
          { label: content.title },
        ]}
        meta={`${services.services.length} ${
          services.services.length === 1 ? "path" : "paths"
        } to explore`}
        priority
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay-deep">Start here</p>
              <div className="mt-8 space-y-5">
                {content.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-ink/10 pt-3">
                    <p className="font-mono text-[0.54rem] uppercase tracking-[0.16em] text-ink/70">
                      {fact.label}
                    </p>
                    <p className="mt-1 font-display text-xl text-ink">{fact.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.12] tracking-[-0.035em] text-ink">
                {content.intro}
              </p>
            </Reveal>
            {children ? <div className="mt-10">{children}</div> : null}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            description={services.description}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.services.map((service, index) => (
              <Reveal key={service.href} delay={Math.min(index * 0.04, 0.24)}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-paper px-6 py-5 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
                Not sure which path is right for you? Start with a conversation.
                We&apos;ll help you find the next step — or just answer the question.
              </p>
              <div className="flex shrink-0 flex-wrap gap-2">
                <a
                  href={site.phone.href}
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/20 px-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  <Phone className="size-3.5" />
                  {site.phone.plain}
                </a>
                <Link
                  href="/appointment"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-pine"
                >
                  Request a visit
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
