import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Clock, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { AppointmentForm } from "@/components/site/appointment-form";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, site } from "@/lib/site";

const meta = pageMeta["/appointment"];

const steps = [
  {
    title: "Send your request",
    body: "Share a few details about you, your preferred time, and the reason for your visit.",
  },
  {
    title: "We follow up",
    body: "Our team will reach out by phone or email to confirm the details and find a time that works.",
  },
  {
    title: "You're on the schedule",
    body: "Once we've connected, your visit is confirmed. New-patient paperwork can be completed online.",
  },
];

export const metadata: Metadata = {
  title: "Request an Appointment",
  description: meta.description,
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Begin with a request."
        description={meta.description}
        image="/images/front-desk-resized.jpg"
        imageAlt="The front desk at Polished Dental"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Request an Appointment" },
        ]}
        priority
        meta="New patients welcome · Bismarck, ND"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-14">
          <Reveal>
            <AppointmentForm />
          </Reveal>

          <div className="space-y-4 lg:sticky lg:top-28">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-ink/10 bg-bone/50 p-6">
                <div className="flex items-center gap-3">
                  <CalendarCheck className="size-4 text-clay-deep" />
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/70">
                    What happens next
                  </p>
                </div>
                <div className="mt-5 space-y-5">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <span className="mt-0.5 font-mono text-[0.55rem] tracking-[0.14em] text-clay-deep">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-[0.84rem] font-medium text-ink">
                          {step.title}
                        </p>
                        <p className="mt-1 text-[0.75rem] leading-relaxed text-ink/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-ink/10 pt-4 text-[0.72rem] leading-relaxed text-ink/70">
                  This request is not a confirmed appointment until our team
                  follows up.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink/10 bg-forest p-6 text-paper">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-champagne/80">
                  Prefer to call?
                </p>
                <a
                  href={site.phone.href}
                  className="mt-3 flex items-center gap-2 font-display text-2xl transition-colors hover:text-champagne"
                >
                  <Phone className="size-4 text-champagne" />
                  {site.phone.plain}
                </a>
                <p className="mt-4 flex items-start gap-2 text-[0.76rem] leading-relaxed text-paper/60">
                  <Clock className="mt-0.5 size-3.5 shrink-0 text-champagne/80" />
                  Monday–Thursday, 7:00 a.m.–4:00 p.m.
                  <br />
                  Friday morning emergency calls.
                </p>
                <a
                  href={site.emailHref}
                  className="mt-3 flex items-center gap-2 text-[0.76rem] text-paper/60 transition-colors hover:text-paper"
                >
                  <Mail className="size-3.5 text-champagne/80" />
                  {site.email}
                </a>
                <Link
                  href="/contact-us"
                  className="mt-5 inline-flex items-center gap-2 border-t border-paper/15 pt-4 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-paper/60 transition-colors hover:text-champagne"
                >
                  Contact the office
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-ink/10 bg-paper p-6">
                <p className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/70">
                  Save a step
                </p>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/70">
                  New patients can complete paperwork online through our secure
                  portal before the first visit.
                </p>
                <Link
                  href="/patient/patient-forms"
                  className="mt-3 inline-flex items-center gap-2 text-[0.78rem] text-copper-deep transition-colors hover:text-ink"
                >
                  Patient forms
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
