import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { doctors, pageMeta, pages, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const meta = pageMeta["/office/meet-our-doctors"];
const page = pages["office/meet-our-doctors"];
const anchors = ["dr-jim", "dr-kristin", "dr-kourtney"];

export const metadata: Metadata = {
  title: "Meet Our Doctors",
  description: meta.description,
  alternates: { canonical: "/office/meet-our-doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Three paths. One practice."
        description={meta.description}
        image={page.banner}
        imageAlt="The doctors of Polished Dental in Bismarck"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Meet Our Doctors" },
        ]}
        priority
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/appointment">
              <CalendarDays className="size-4" />
              Request an appointment
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a href={site.phone.href}>
              <Phone className="size-4" />
              {site.phone.plain}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-clay-deep">The doctors</p>
              <div className="mt-8 space-y-2">
                {doctors.map((doctor, index) => (
                  <a
                    key={doctor.name}
                    href={`#${anchors[index]}`}
                    className="group flex items-center justify-between gap-4 border-t border-ink/10 py-3 text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    <span>{doctor.name}</span>
                    <span className="font-mono text-[0.55rem] tracking-[0.16em] text-ink/70">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.12] tracking-[-0.035em] text-ink">
                Different paths brought them here. The same belief keeps them
                here: good dentistry is personal, ethical, and never rushed.
              </p>
              <p className="mt-6 max-w-2xl text-[0.92rem] leading-relaxed text-ink/70">
                Our trusted doctors — Dr. James A. Nelson, Dr. Kristin R. Schoch,
                and Dr. Kourtney A. Grace — work together as a team striving for a
                common goal: helping our patients achieve and maintain beautiful,
                healthy smiles.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-ink/10">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.name}
                id={anchors[index]}
                className="scroll-mt-28 border-b border-ink/10 py-14 md:py-20"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <Reveal
                    className={cn(
                      "lg:col-span-5",
                      index % 2 === 1 ? "lg:order-2" : "",
                    )}
                  >
                    <div className="relative mx-auto max-w-[24rem]">
                      <div className="pointer-events-none absolute -left-6 -top-7 size-28 rounded-full border border-ink/12" />
                      <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-3xl border border-ink/10 bg-mist">
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={doctor.image}
                            alt={`${doctor.name}, ${doctor.role} at Polished Dental`}
                            fill
                            sizes="(max-width: 1024px) 80vw, 420px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent" />
                        </div>
                      </div>
                      <div className="absolute -bottom-4 right-3 rounded-full border border-ink/10 bg-paper/90 px-4 py-2 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/70 shadow-sm backdrop-blur-md">
                        0{index + 1} / 03
                      </div>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.08}
                    className={cn(
                      "lg:col-span-7",
                      index % 2 === 1 ? "lg:order-1" : "",
                    )}
                  >
                    <p className="eyebrow text-clay-deep">{doctor.role}</p>
                    <h2 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.96] tracking-[-0.04em] text-ink">
                      {doctor.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink/70">
                      {doctor.credentials}
                    </p>

                    <blockquote className="mt-7 border-l-2 border-clay/60 pl-5 font-display text-xl italic leading-relaxed text-pine">
                      “{doctor.quote}”
                    </blockquote>

                    <div className="mt-7 space-y-4 text-[0.9rem] leading-relaxed text-ink/70">
                      {doctor.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>

                    {doctor.memberships.length ? (
                      <div className="mt-8 border-t border-ink/10 pt-6">
                        <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-ink/70">
                          Memberships
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {doctor.memberships.map((membership) => (
                            <span
                              key={membership}
                              className="rounded-full border border-ink/12 bg-bone/50 px-3 py-1.5 text-[0.7rem] text-ink/70"
                            >
                              {membership}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </Reveal>
                </div>
              </article>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="flex flex-col justify-between gap-5 rounded-2xl border border-ink/10 bg-bone/50 px-6 py-5 sm:flex-row sm:items-center">
              <p className="max-w-xl text-sm leading-relaxed text-ink/70">
                The doctors are only part of the story. Meet the hygienists,
                assistants, and team members who make every visit feel a little
                lighter.
              </p>
              <Link
                href="/office/meet-the-staff"
                className="link-underline shrink-0 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-copper-deep"
              >
                Meet the staff
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come meet us in person."
        description="Request a visit or call the office. We'd be glad to talk through your goals and help you find the right time."
      />
    </>
  );
}
