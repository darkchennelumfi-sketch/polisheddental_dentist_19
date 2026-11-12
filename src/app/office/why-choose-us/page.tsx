import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Baby,
  Briefcase,
  Cpu,
  Flame,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ScanLine,
  Tv,
  Users,
  Wifi,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, pages } from "@/lib/site";

const meta = pageMeta["/office/why-choose-us"];
const page = pages["office/why-choose-us"];

const features = [
  { title: "Convenient location", icon: MapPin },
  { title: "Attention to customer satisfaction", icon: HeartHandshake },
  { title: "Comfortable office with a fireplace", icon: Flame },
  { title: "Professional atmosphere", icon: Briefcase },
  { title: "Free WiFi", icon: Wifi },
  { title: "Televisions in the treatment areas", icon: Tv },
  { title: "Children's play area", icon: Baby },
  { title: "Up-to-date modern technology", icon: Cpu },
  { title: "Digital X-rays", icon: ScanLine },
  { title: "Friendly team", icon: Users },
  { title: "Highly-qualified doctors", icon: GraduationCap },
  { title: "CEREC single-visit crowns", icon: Award },
];

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: meta.description,
  alternates: { canonical: "/office/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="The details are the difference."
        description={meta.description}
        image={page.banner}
        imageAlt="A patient at Polished Dental"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Why Choose Us?" },
        ]}
        priority
        meta="Comfort · Technology · Genuine care"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay-deep">The Polished difference</p>
            <p className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,3.8vw,3.4rem)] leading-[1.1] tracking-[-0.035em] text-ink">
              The majority of our new patient referrals come from our patients.
            </p>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink/70">
              We strive to make your experience with us as comfortable and
              welcoming as possible by treating each individual patient with
              attention and respect — and by providing individualized treatment
              plans that meet your specific dental needs and desires.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/appointment"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-pine"
              >
                Request a visit
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/office/office-policies"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/20 px-5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
              >
                Office policies
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-[30rem]">
              <div className="pointer-events-none absolute -right-6 -top-6 size-32 rounded-full border border-clay/25" />
              <div className="relative overflow-hidden rounded-t-[16rem] rounded-b-3xl border border-ink/10 bg-mist">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={page.images[0]?.src ?? page.banner}
                    alt={page.images[0]?.alt ?? "The Polished Dental office"}
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl border border-ink/10 bg-paper/95 px-5 py-4 shadow-soft backdrop-blur-md sm:left-8">
                <p className="font-display text-xl leading-tight text-ink">
                  Referrals that speak for themselves.
                </p>
                <p className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink/70">
                  Mostly word of mouth
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="What you'll notice"
            title="Twelve details that add up."
            description="Some are practical. Some are simply pleasant. Together they're the reason a visit to Polished Dental feels a little different."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={Math.min(index * 0.03, 0.22)}>
                  <div className="group flex h-full min-h-[9.5rem] flex-col justify-between gap-6 bg-paper p-6 transition-colors hover:bg-cream/50">
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="size-5 text-clay-deep" strokeWidth={1.4} />
                      <span className="font-mono text-[0.52rem] tracking-[0.16em] text-ink/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-display text-[1.35rem] leading-[1.1] tracking-[-0.02em] text-ink">
                      {feature.title}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <Testimonials />
        </div>
      </section>

      <CtaBand
        title="See the difference for yourself."
        description="Visit us on East Interstate Avenue, or start with a conversation. We'd be glad to help you find the right next step."
      />
    </>
  );
}
