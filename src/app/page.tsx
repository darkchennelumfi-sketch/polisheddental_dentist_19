import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  HeartHandshake,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp, Reveal, RevealLine } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceShowcase } from "@/components/site/service-showcase";
import { ServiceMarquee } from "@/components/site/service-marquee";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBand } from "@/components/site/cta-band";
import { blogPosts, doctors, pillars, site, stats, trustBadges } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-bone">
        <div className="pointer-events-none absolute -right-40 top-0 size-[48rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,123,81,0.2),transparent_65%)]" />
        <div className="pointer-events-none absolute -left-52 bottom-0 size-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(174,189,170,0.5),transparent_65%)]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06] lg:block" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06] lg:block" />

        <div className="shell relative grid items-center gap-14 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-28 lg:pt-20">
          <div className="relative z-10">
            <Reveal y={10}>
              <p className="eyebrow text-clay-deep">
                Bismarck, North Dakota · Dentistry since 1985
              </p>
            </Reveal>

            <h1 className="mt-6 font-display text-[clamp(3.5rem,8.1vw,7.2rem)] leading-[0.87] tracking-[-0.055em] text-ink">
              <RevealLine>Good dentistry,</RevealLine>
              <RevealLine delay={0.08}>
                <span className="italic text-pine">beautifully</span>
              </RevealLine>
              <RevealLine delay={0.16}>
                <span className="relative inline-block">
                  polished.
                  <span className="absolute -right-7 top-1 hidden size-3 rounded-full bg-clay sm:block" />
                </span>
              </RevealLine>
            </h1>

            <Reveal delay={0.24} y={18}>
              <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-ink/70">
                Gentle, personal dental care for children and adults in and around
                Bismarck. Three doctors, one shared belief: a healthy smile should
                feel as good as it looks.
              </p>
            </Reveal>

            <Reveal delay={0.32} y={16} className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/appointment">
                  <CalendarDays className="size-4" />
                  Request an appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/office/meet-our-doctors">
                  Meet our doctors
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={0.4} y={14} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="size-4 text-clay-deep" />
                <p className="text-[0.72rem] text-ink/70">
                  <span className="font-semibold text-ink">Most new patients</span> come
                  by referral
                </p>
              </div>
              <div className="hidden h-8 w-px bg-ink/10 sm:block" />
              <div className="flex items-center gap-2.5">
                <Sparkles className="size-4 text-clay-deep" />
                <p className="text-[0.72rem] text-ink/70">
                  Complimentary implant & whitening consultations
                </p>
              </div>
            </Reveal>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto lg:mr-0">
            <div className="pointer-events-none absolute -left-6 -top-8 size-36 rounded-full border border-ink/15 sm:-left-12 sm:-top-12 sm:size-48" />
            <div className="pointer-events-none absolute -left-2 -top-4 size-20 rounded-full border border-clay/30 sm:-left-6 sm:-top-6 sm:size-28" />

            <Reveal delay={0.12} y={34}>
              <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-[0_40px_100px_-50px_rgba(17,36,31,0.5)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/2025-our-doctors.jpg"
                    alt="Dr. James Nelson, Dr. Kristin Schoch, and Dr. Kourtney Grace of Polished Dental"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 540px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-champagne">
                      The doctors of Polished Dental
                    </p>
                    <p className="mt-1 font-display text-2xl leading-tight text-paper">
                      Dr. Jim · Dr. Kristin · Dr. Kourtney
                    </p>
                  </div>
                  <Link
                    href="/office/meet-our-doctors"
                    aria-label="Meet our doctors"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-paper/30 text-paper transition-colors hover:bg-paper hover:text-ink"
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.32} y={18}>
              <div className="glass absolute -bottom-10 -left-2 max-w-[15rem] rounded-2xl border border-ink/10 p-4 shadow-[0_24px_50px_-30px_rgba(17,36,31,0.45)] sm:-left-8 sm:p-5">
                <p className="flex items-center gap-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink/70">
                  <span className="size-1.5 rounded-full bg-clay" />
                  Now welcoming
                </p>
                <p className="mt-2 font-display text-xl leading-tight text-ink">
                  New patients & growing families.
                </p>
                <Link
                  href="/appointment"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-copper-deep"
                >
                  Request a visit
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </Reveal>

            <div className="pointer-events-none absolute -right-3 -top-10 hidden size-28 rounded-full bg-forest text-paper sm:block lg:-right-8">
              <svg viewBox="0 0 120 120" className="spin-slow size-full">
                <defs>
                  <path
                    id="hero-circle"
                    d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                  />
                </defs>
                <text
                  fill="currentColor"
                  fontSize="7.2"
                  letterSpacing="2.2"
                  fontFamily="var(--font-dm-mono)"
                >
                  <textPath href="#hero-circle">
                    POLISHED DENTAL · BISMARCK · NORTH DAKOTA ·
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 grid place-items-center">
                <Sparkles className="size-5 text-champagne" />
              </span>
            </div>
          </div>
        </div>

        <div className="shell relative pb-8">
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-ink/10 pt-6">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {trustBadges.map((badge) => (
                <span key={badge.label} className="group flex items-baseline gap-2">
                  <span className="font-display text-lg text-ink/70 transition-colors group-hover:text-ink">
                    {badge.label}
                  </span>
                  <span className="hidden font-mono text-[0.5rem] uppercase tracking-[0.12em] text-ink/70 sm:inline">
                    {badge.sub}
                  </span>
                </span>
              ))}
            </div>
            <span className="hidden items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/70 md:flex">
              <ArrowDown className="size-3.5" />
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      <ServiceMarquee />

      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-clay-deep">Welcome to Polished</p>
              <p className="mt-6 font-mono text-[0.6rem] uppercase leading-loose tracking-[0.16em] text-ink/70">
                A dental home,
                <br />
                not a revolving door.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <p className="max-w-4xl font-display text-[clamp(2rem,4.1vw,3.7rem)] leading-[1.08] tracking-[-0.035em] text-ink">
                We proudly provide gentle dental care in a relaxing, caring
                environment for children and adult patients in and around{" "}
                <Link href="/office/map-and-directions" className="italic text-pine underline decoration-clay/40 underline-offset-8">
                  Bismarck, North Dakota
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-6 text-[0.92rem] leading-relaxed text-ink/70 md:grid-cols-2">
                <p>
                  Our trusted doctors — Dr. James A. Nelson, Dr. Kristin R.
                  Schoch, and Dr. Kourtney A. Grace — work together as a team
                  striving for a common goal: helping our patients achieve and
                  maintain beautiful, healthy smiles.
                </p>
                <p>
                  We treat each patient as an individual and work one-on-one with
                  you to create a personalized treatment plan that fits your
                  specific needs and desires. Top-of-the-line technology, a
                  comforting office, and a genuinely friendly team are all part of
                  the experience.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-clay/50" />
                <p className="font-display text-xl italic text-pine">
                  Dr. Jim, Dr. Kristin & Dr. Kourtney
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <p className="font-display text-[clamp(2.8rem,4.8vw,4.6rem)] leading-none tracking-[-0.05em] text-ink">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink/70">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[0.68rem] text-ink/70">{stat.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-ink/10 bg-bone/50 py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What we do"
            title="Care for every kind of smile."
            description="From the first checkup to a full smile makeover, our services are designed to meet you where you are — and take you where you'd like to go."
            link={{ label: "Explore all treatments", href: "/treatment" }}
          />
          <div className="mt-14">
            <ServiceShowcase />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute -left-32 -top-44 size-[38rem] rounded-full border border-paper/10" />
        <div className="pointer-events-none absolute -left-16 -top-32 size-[26rem] rounded-full border border-paper/10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(199,165,107,0.14),transparent_60%)]" />

        <div className="shell relative">
          <SectionHeading
            eyebrow="The Polished difference"
            title="The details are the difference."
            description="Comfort, technology, and a team that treats you like a person. These are the things our patients tell us matter most — and the things we refuse to rush."
            link={{ label: "Why choose us", href: "/office/why-choose-us" }}
            tone="dark"
          />

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.number} delay={index * 0.06}>
                <div className="group border-t border-paper/15 pt-6">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-[0.6rem] tracking-[0.18em] text-champagne/70">
                      {pillar.number}
                    </span>
                    <span className="grid size-8 place-items-center rounded-full border border-paper/15 text-paper/60 transition-colors group-hover:border-champagne/40 group-hover:text-champagne">
                      <ArrowUpRight className="size-3.5" />
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-3xl leading-[1.05] tracking-[-0.03em] text-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.88rem] leading-relaxed text-paper/60">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-paper/15 bg-paper/[0.04] px-6 py-5 backdrop-blur-sm">
              <p className="text-sm text-paper/60">
                A fireplace, a children&apos;s play area, free WiFi, and TVs in the
                treatment rooms. Visit us and see for yourself.
              </p>
              <Link
                href="/office/map-and-directions"
                className="link-underline font-mono text-[0.58rem] uppercase tracking-[0.16em] text-champagne"
              >
                Plan your visit
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Our doctors"
            title="Three doctors. One standard."
            description="Different paths brought them here. The same belief keeps them here: good dentistry is personal, ethical, and never rushed."
            link={{ label: "Meet the full team", href: "/office/meet-the-staff" }}
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name} delay={index * 0.08}>
                <Link href="/office/meet-our-doctors" className="group block">
                  <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-2xl border border-ink/10 bg-mist">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={doctor.image}
                        alt={`${doctor.name}, ${doctor.role} at Polished Dental`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-70" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                      <div>
                        <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-champagne">
                          {doctor.role}
                        </p>
                        <p className="mt-1 font-display text-2xl leading-tight text-paper">
                          {doctor.name}
                        </p>
                        <p className="mt-0.5 font-mono text-[0.55rem] tracking-[0.12em] text-paper/60">
                          {doctor.credentials}
                        </p>
                      </div>
                      <span className="grid size-9 place-items-center rounded-full border border-paper/30 text-paper transition-colors group-hover:bg-paper group-hover:text-ink">
                        <ArrowUpRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell">
          <Testimonials />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-bone/50 py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="From the journal"
            title="Notes from the practice."
            description="Practical thoughts on routines, technology, and the small habits behind a healthy smile."
            link={{ label: "Read the journal", href: "/office/polished-dental-blog" }}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <Link
                  href={`/office/polished-dental-blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-mist">
                    <Image
                      src={post.hero}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-4 font-mono text-[0.54rem] uppercase tracking-[0.15em] text-ink/70">
                    {post.category} · {formatDate(post.date)}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-[1.1] tracking-[-0.025em] text-ink transition-colors group-hover:text-pine">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-mist">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/front-desk-resized.jpg"
                  alt="The front desk at Polished Dental in Bismarck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-paper/20 bg-forest/60 px-4 py-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-paper/80 backdrop-blur-md">
                1700 E. Interstate Ave.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow text-clay-deep">Visit us</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94] tracking-[-0.045em] text-ink">
              A comfortable place to land.
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink/70">
              Easy to find on East Interstate Avenue, with a team that&apos;s genuinely
              glad you&apos;re here. We&apos;re open Monday through Thursday, and we keep
              Friday mornings available for emergency calls.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 bg-bone/50 p-5">
                <MapPin className="size-4 text-clay-deep" />
                <p className="mt-3 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/70">
                  Address
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-copper-deep"
                >
                  Get directions
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-bone/50 p-5">
                <Phone className="size-4 text-clay-deep" />
                <p className="mt-3 font-mono text-[0.54rem] uppercase tracking-[0.14em] text-ink/70">
                  Hours
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink/70">
                  Mon–Thu: 7:00 a.m.–4:00 p.m.
                  <br />
                  Friday: morning emergency calls
                </p>
                <a
                  href={site.phone.href}
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-copper-deep"
                >
                  {site.phone.plain}
                  <ArrowUpRight className="size-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="A brighter smile starts with a simple hello."
        description="Call the office or send an appointment request. We'll help you find the right time and answer anything on your mind."
      />
    </>
  );
}
