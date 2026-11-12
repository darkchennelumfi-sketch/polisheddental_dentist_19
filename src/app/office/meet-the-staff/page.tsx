import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { StaffGrid } from "@/components/site/staff-grid";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { pageMeta, pages, site, staff } from "@/lib/site";

const meta = pageMeta["/office/meet-the-staff"];
const page = pages["office/meet-the-staff"];

const groups = ["Dental Hygienists", "Dental Assistants", "Administration"];

export const metadata: Metadata = {
  title: "Meet the Staff",
  description: meta.description,
  alternates: { canonical: "/office/meet-the-staff" },
};

export default function StaffPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="The people who make the place."
        description={meta.description}
        image={page.banner}
        imageAlt="The team at Polished Dental"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Meet the Staff" },
        ]}
        priority
      >
        <Button asChild variant="outline">
          <a href={site.phone.href}>
            <Phone className="size-4" />
            {site.phone.plain}
          </a>
        </Button>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-clay-deep">Our team</p>
              <div className="mt-8 grid gap-4">
                {groups.map((group) => (
                  <div
                    key={group}
                    className="flex items-baseline justify-between gap-4 border-t border-ink/10 pt-3"
                  >
                    <p className="font-display text-xl text-ink">{group}</p>
                    <p className="font-mono text-[0.58rem] tracking-[0.16em] text-ink/70">
                      {staff.filter((member) => member.group === group).length}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.12] tracking-[-0.035em] text-ink">
                Hygienists, assistants, coordinators, and patient relations — the
                people who make Polished Dental feel like Polished Dental.
              </p>
              <p className="mt-6 max-w-2xl text-[0.92rem] leading-relaxed text-ink/70">
                Every appointment is a collaboration. From the first phone call to
                the moment you head back out the door, our team is here to answer
                questions, ease nerves, and make sure you feel genuinely cared for.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <StaffGrid />
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 px-6 py-5 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-relaxed text-ink/70">
                Want to know the doctors behind the practice? Their paths,
                training, and philosophy are worth a few minutes.
              </p>
              <Link
                href="/office/meet-our-doctors"
                className="link-underline shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-copper-deep"
              >
                Meet the doctors
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="A friendly voice is one call away."
        description="Whether you're booking a first visit or checking on a concern, our team is glad to help."
      />
    </>
  );
}
