import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-bone">
      <div className="pointer-events-none absolute -right-32 -top-20 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,123,81,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(174,189,170,0.4),transparent_65%)]" />

      <div className="shell relative flex min-h-[70vh] flex-col justify-center py-20 md:py-28">
        <p className="eyebrow text-clay-deep">404</p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.4rem,9vw,8rem)] leading-[0.86] tracking-[-0.055em] text-ink">
          This page drifted
          <br />
          <span className="italic text-pine">off course.</span>
        </h1>
        <p className="mt-7 max-w-lg text-[1rem] leading-relaxed text-ink/70">
          The page you were looking for isn&apos;t here — but your smile still is.
          Try the homepage, or call the office and we&apos;ll point you in the right
          direction.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.phone.href}>
              <Phone className="size-4" />
              {site.phone.plain}
            </a>
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/70">
          <Link href="/appointment" className="transition-colors hover:text-ink">
            Request an appointment
            <ArrowUpRight className="ml-1.5 inline size-3" />
          </Link>
          <Link href="/contact-us" className="transition-colors hover:text-ink">
            Contact us
          </Link>
          <Link href="/patient" className="transition-colors hover:text-ink">
            Patient resources
          </Link>
          <Link href="/office/meet-our-doctors" className="transition-colors hover:text-ink">
            Meet the doctors
          </Link>
        </div>
      </div>
    </section>
  );
}
