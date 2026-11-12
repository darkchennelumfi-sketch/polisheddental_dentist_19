import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, pages, site } from "@/lib/site";

const meta = pageMeta["/office/financial"];
const page = pages["office/financial"];

const cards = ["Visa", "MasterCard", "American Express", "Discover"];

const carriers = [
  {
    name: "Blue Cross Blue Shield of ND",
    note: "Participating provider",
  },
  {
    name: "United Concordia",
    note: "National Fee For Service & Concordia Advantage",
  },
  {
    name: "Delta Dental",
    note: "Premier",
  },
];

export const metadata: Metadata = {
  title: "Financial",
  description: meta.description,
  alternates: { canonical: "/office/financial" },
};

export default function FinancialPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Quality care, within reach."
        description={meta.description}
        image={page.banner}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Financial" },
        ]}
        priority
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay-deep">Payment, simply</p>
            <p className="mt-6 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.1] tracking-[-0.035em] text-ink">
              We never want costs to stand in the way of quality treatment.
            </p>
            <p className="mt-6 max-w-lg text-[0.92rem] leading-relaxed text-ink/70">
              We never want costs to stand in the way of quality treatment, which
              is why we are dedicated to providing our patients with care that is
              both effective and affordable. Your treatment plan will include a
              breakdown of all applicable fees, and we will inform you of all
              costs before treatment is administered.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/10 bg-bone/40 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-paper text-clay-deep">
                  <CreditCard className="size-4" />
                </span>
                <div>
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/70">
                    Accepted here
                  </p>
                  <p className="font-display text-xl text-ink">Major credit cards</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {cards.map((card) => (
                  <div
                    key={card}
                    className="rounded-xl border border-ink/10 bg-paper px-4 py-3 text-sm text-ink/70"
                  >
                    {card}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[0.8rem] leading-relaxed text-ink/70">
                Your treatment plan will include a breakdown of all applicable
                fees, and we will inform you of all costs before treatment is
                administered. Financing options are available through our office
                and CareCredit.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-pine"
                >
                  Request a visit
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <a
                  href={site.careCreditUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/20 px-4 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  CareCredit
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Insurance"
            title="Here to help you maximize your benefits."
            description="We accept and electronically submit all insurances, but are only a participating provider for the following carriers."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {carriers.map((carrier, index) => (
              <Reveal key={carrier.name} delay={index * 0.06}>
                <div className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-ink/10 bg-paper p-6">
                  <div className="flex items-start justify-between gap-4">
                    <BadgeCheck className="size-5 text-clay-deep" strokeWidth={1.4} />
                    <span className="font-mono text-[0.52rem] tracking-[0.16em] text-ink/70">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
                      {carrier.name}
                    </p>
                    <p className="mt-2 font-mono text-[0.52rem] uppercase leading-relaxed tracking-[0.14em] text-ink/70">
                      {carrier.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink/10 bg-paper p-6">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="size-4 text-clay-deep" />
                  <p className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/70">
                    On your first visit
                  </p>
                </div>
                <p className="mt-4 text-[0.84rem] leading-relaxed text-ink/70">
                  Bring your current insurance card with you. If you change
                  insurance companies or join another employer&apos;s plan, please be
                  sure to let us know. If an insurance referral is necessary,
                  please bring the completed form with you to your appointment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-ink/10 bg-paper p-6">
                <div className="flex items-center gap-3">
                  <Wallet className="size-4 text-clay-deep" />
                  <p className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/70">
                    A note on estimates
                  </p>
                </div>
                <p className="mt-4 text-[0.84rem] leading-relaxed text-ink/70">
                  Because insurance policies vary, we can only estimate your
                  coverage in good faith but cannot guarantee coverage due to the
                  complexities of insurance contracts. Your estimated patient
                  portion must be paid at the time of service.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-paper md:py-20">
        <div className="shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <HeartHandshake className="size-5 text-champagne" />
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-champagne/80">
                Financing through CareCredit
              </p>
            </div>
            <p className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.035em]">
              A payment plan should feel like a plan — not a hurdle.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-paper/60">
              If you have questions about financing or payment, please ask us. We
              will thoroughly explain your choices and work hard to accommodate
              you.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="shrink-0">
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={site.careCreditUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-paper px-6 font-medium text-ink transition-colors hover:bg-bone"
              >
                Apply with CareCredit
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-paper/25 px-6 text-paper/80 transition-colors hover:border-paper/50 hover:text-paper"
              >
                Ask a billing question
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Let's talk through the numbers."
        description="We'll explain your options before treatment begins, so there are no surprises along the way."
      />
    </>
  );
}
