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
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, pages, site } from "@/lib/site";

const meta = pageMeta["/contact-us"];
const page = pages["contact-us"];

export const metadata: Metadata = {
  title: "Contact Us",
  description: meta.description,
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="We're listening."
        description={meta.description}
        image={page.banner}
        imageAlt="The front desk at Polished Dental"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
        priority
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phone.href}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-pine"
          >
            <Phone className="size-4" />
            {site.phone.plain}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-medium text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
          >
            <Mail className="size-4" />
            Email the office
          </a>
        </div>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-clay-deep">Get in touch</p>
              <p className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.04em] text-ink">
                A real person is happy to help.
              </p>
              <p className="mt-5 max-w-lg text-[0.92rem] leading-relaxed text-ink/70">
                We are always available to talk with you and address your
                concerns. Please feel free to contact us during office hours
                through our phone number or email address. After hours, you may
                contact us through our answering machine.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <Reveal delay={0.04}>
                <a
                  href={site.phone.href}
                  className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 p-5 transition-colors hover:border-ink/25 hover:bg-bone"
                >
                  <Phone className="size-4 text-clay-deep" />
                  <div>
                    <p className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                      Phone
                    </p>
                    <p className="mt-1 text-[0.9rem] text-ink/70">
                      {site.phone.display}
                    </p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a
                  href={site.emailHref}
                  className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 p-5 transition-colors hover:border-ink/25 hover:bg-bone"
                >
                  <Mail className="size-4 text-clay-deep" />
                  <div>
                    <p className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                      Email
                    </p>
                    <p className="mt-1 break-all text-[0.9rem] text-ink/70">
                      {site.email}
                    </p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.12}>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 p-5 transition-colors hover:border-ink/25 hover:bg-bone"
                >
                  <MapPin className="size-4 text-clay-deep" />
                  <div>
                    <p className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                      Address
                    </p>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-ink/70">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 p-5">
                  <Clock className="size-4 text-clay-deep" />
                  <div>
                    <p className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-ink/70">
                      Hours
                    </p>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-ink/70">
                      Mon–Thu: 7:00 a.m.–4:00 p.m.
                      <br />
                      Friday: morning emergency calls
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-4 flex flex-col justify-between gap-4 rounded-2xl border border-ink/10 bg-paper px-5 py-4 text-[0.75rem] text-ink/70 sm:flex-row sm:items-center">
                <span className="flex items-center gap-2">
                  <Phone className="size-3.5 text-clay-deep" />
                  Toll free: {site.tollFree.display}
                </span>
                <span className="flex items-center gap-2">
                  <Printer className="size-3.5 text-clay-deep" />
                  Fax: {site.fax}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-4 rounded-2xl border border-clay/20 bg-clay/[0.06] px-5 py-4">
                <p className="text-[0.8rem] leading-relaxed text-ink/70">
                  <span className="font-medium text-ink">Dental emergency?</span>{" "}
                  Call the office as soon as you can. During business hours we
                  will work you into the schedule; after hours, call for the
                  doctor&apos;s emergency contact number.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
            <div className="mt-4 rounded-2xl border border-ink/10 bg-bone/40 p-5">
              <p className="font-mono text-[0.54rem] uppercase tracking-[0.16em] text-ink/70">
                Prefer to book a visit?
              </p>
              <Link
                href="/appointment"
                className="mt-2 inline-flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
              >
                Use the appointment request form
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-clay-deep">Find us</p>
              <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-ink">
                On East Interstate Avenue.
              </h2>
            </div>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 self-start rounded-full bg-ink px-5 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-paper transition-colors hover:bg-pine sm:self-auto"
            >
              <Navigation className="size-3.5" />
              Get directions
            </a>
          </div>

          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-mist">
              <iframe
                src={site.mapUrl}
                title="Map to Polished Dental"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[22rem] w-full border-0 md:h-[28rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
