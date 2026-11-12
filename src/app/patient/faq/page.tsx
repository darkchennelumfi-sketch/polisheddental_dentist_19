import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { FaqAccordion, FaqInline } from "@/components/site/faq-accordion";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { faqs, pageMeta, pages, site } from "@/lib/site";

const meta = pageMeta["/patient/faq"];
const page = pages["patient/faq"];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: meta.description,
  alternates: { canonical: "/patient/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Questions, answered."
        description={meta.description}
        image={page.banner}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Patient", href: "/patient" },
          { label: "FAQ" },
        ]}
        priority
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay-deep">The essentials</p>
              <p className="mt-6 font-display text-[clamp(1.9rem,3.7vw,3.2rem)] leading-[1.05] tracking-[-0.035em] text-ink">
                Straight answers, without the runaround.
              </p>
              <p className="mt-5 text-[0.9rem] leading-relaxed text-ink/70">
                These are the questions we hear most often. If yours isn&apos;t here,
                call the office — a real person is happy to help.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8">
              <div className="rounded-2xl border border-ink/10 bg-bone/50 p-6">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/70">
                  Prefer to talk?
                </p>
                <a
                  href={site.phone.href}
                  className="mt-3 flex items-center gap-2 font-display text-2xl text-ink transition-colors hover:text-copper-deep"
                >
                  <Phone className="size-4 text-clay-deep" />
                  {site.phone.plain}
                </a>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-ink/70">
                  Monday–Thursday, 7:00 a.m.–4:00 p.m.
                  <br />
                  Friday morning emergency calls.
                </p>
                <Link
                  href="/contact-us"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[0.53rem] uppercase tracking-[0.14em] text-copper-deep"
                >
                  Send a note
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="mt-4">
              <FaqInline />
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <FaqAccordion items={faqs} defaultOpen="item-0" />

            <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-ink/10 bg-bone/40 px-6 py-5 sm:flex-row sm:items-center">
              <p className="text-[0.82rem] leading-relaxed text-ink/70">
                New to the practice? The first-visit page walks through what to
                expect, start to finish.
              </p>
              <Link
                href="/patient/first-visit"
                className="shrink-0 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-copper-deep"
              >
                Your first visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        description="We'd rather answer it than have you wonder. Call or send a note and we'll take it from there."
      />
    </>
  );
}
