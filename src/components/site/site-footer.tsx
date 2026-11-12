import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navigation, site } from "@/lib/site";

const footerGroups = navigation.filter((item) => item.children);

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-paper">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-[22rem] rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-moss/20 blur-3xl" />

      <div className="shell relative">
        <div className="flex flex-col gap-8 border-b border-paper/15 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow text-champagne">Ready when you are</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.04em]">
              Your next visit,
              <br />
              <span className="italic text-champagne">beautifully simple.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
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
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] lg:py-20">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              Gentle, personal dental care for children and adults in and around
              Bismarck, North Dakota. Three doctors. One shared standard.
            </p>

            <div className="mt-8 space-y-4 text-sm">
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
              <a
                href={site.phone.href}
                className="flex items-center gap-3 text-paper/70 transition-colors hover:text-paper"
              >
                <Phone className="size-4 shrink-0 text-champagne" />
                {site.phone.display}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 text-paper/70 transition-colors hover:text-paper"
              >
                <Mail className="size-4 shrink-0 text-champagne" />
                {site.email}
              </a>
              <div className="flex items-start gap-3 text-paper/70">
                <Clock className="mt-0.5 size-4 shrink-0 text-champagne" />
                <span>
                  Mon–Thu: 7:00 a.m.–4:00 p.m.
                  <br />
                  Friday: morning emergency calls
                </span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Polished Dental on Facebook"
                className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-champagne hover:text-champagne"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Polished Dental on Instagram"
                className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-champagne hover:text-champagne"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {footerGroups.slice(0, 5).map((group) => (
              <div key={group.href}>
                <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-champagne/80">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.children?.slice(0, 7).map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-[0.8rem] leading-snug text-paper/60 transition-colors hover:text-paper"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-champagne/80">
                More
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/contact-us" className="text-[0.8rem] text-paper/60 transition-colors hover:text-paper">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="text-[0.8rem] text-paper/60 transition-colors hover:text-paper">
                    Request an Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/patient/patient-forms" className="text-[0.8rem] text-paper/60 transition-colors hover:text-paper">
                    Patient Forms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[0.8rem] text-paper/60 transition-colors hover:text-paper">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href={site.careCreditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.8rem] text-paper/60 transition-colors hover:text-paper"
                  >
                    CareCredit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative border-t border-paper/15 py-12">
          <p
            aria-hidden="true"
            className="pointer-events-none select-none font-display text-[clamp(4.5rem,17vw,15rem)] leading-[0.8] tracking-[-0.06em] text-paper/[0.06]"
          >
            Polished
          </p>
          <div className="mt-8 flex flex-col justify-between gap-4 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-paper/60 sm:flex-row">
            <p>{site.legal.copyright}</p>
            <p className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-champagne/60" />
              {site.legal.credit}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
