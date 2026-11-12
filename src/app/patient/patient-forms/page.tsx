import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { pageMeta, site } from "@/lib/site";

const meta = pageMeta["/patient/patient-forms"];

const steps = [
  {
    icon: ClipboardList,
    title: "Open the secure portal",
    body: "Use the button below to visit our online patient forms portal.",
  },
  {
    icon: FileCheck2,
    title: "Complete your forms",
    body: "Fill in your information at your own pace, before your appointment.",
  },
  {
    icon: Sparkles,
    title: "Arrive with less to do",
    body: "Check in, meet your team, and settle in. We'll take it from there.",
  },
];

export const metadata: Metadata = {
  title: "Patient Forms",
  description: meta.description,
  alternates: { canonical: "/patient/patient-forms" },
};

export default function PatientFormsPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Paperwork, simplified."
        description={meta.description}
        image="/images/front-desk-resized.jpg"
        imageAlt="The front desk at Polished Dental"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Patient", href: "/patient" },
          { label: "Patient Forms" },
        ]}
        priority
      >
        <Button asChild>
          <a href={site.patientFormsUrl} target="_blank" rel="noreferrer">
            Open the patient portal
            <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-clay-deep">Before you arrive</p>
            <p className="mt-6 font-display text-[clamp(1.9rem,3.7vw,3.3rem)] leading-[1.05] tracking-[-0.035em] text-ink">
              A few minutes at home makes for a smoother visit.
            </p>
            <p className="mt-5 max-w-lg text-[0.92rem] leading-relaxed text-ink/70">
              Complete your paperwork online through our secure patient portal.
              If you have trouble with the form or would rather fill it out in the
              office, call us and we&apos;ll help.
            </p>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-bone/50 p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-4 text-clay-deep" />
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-ink/70">
                  What to bring
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-[0.82rem] leading-relaxed text-ink/70">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                  Your current insurance card.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                  Any completed insurance referral form, if one is required.
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                  A list of questions or concerns — we&apos;re glad to talk them
                  through.
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-forest p-7 text-paper md:p-10">
              <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-champagne/80">
                Secure patient portal
              </p>
              <p className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] tracking-[-0.035em]">
                Your forms, ready when you are.
              </p>
              <p className="mt-4 max-w-md text-[0.88rem] leading-relaxed text-paper/60">
                The portal opens in a new tab. Complete the forms before your
                appointment, and let us know if anything changes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="light">
                  <a href={site.patientFormsUrl} target="_blank" rel="noreferrer">
                    Open the portal
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost-light">
                  <Link href="/contact-us">Ask a question</Link>
                </Button>
              </div>

              <div className="mt-9 grid gap-4 border-t border-paper/15 pt-6 sm:grid-cols-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title}>
                      <div className="flex items-center justify-between">
                        <Icon className="size-4 text-champagne" />
                        <span className="font-mono text-[0.5rem] tracking-[0.16em] text-paper/60">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 font-display text-lg leading-tight text-paper">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[0.7rem] leading-relaxed text-paper/60">
                        {step.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-4 rounded-2xl border border-ink/10 bg-paper px-6 py-5 sm:flex-row sm:items-center">
              <p className="text-[0.82rem] leading-relaxed text-ink/70">
                New patient? Start with the first-visit page for the full picture.
              </p>
              <Link
                href="/patient/first-visit"
                className="link-underline shrink-0 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-copper-deep"
              >
                First visit
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need a hand with the paperwork?"
        description="Call the office and we'll walk you through it — no need to figure it out alone."
      />
    </>
  );
}
