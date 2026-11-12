import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { BlogExplorer } from "@/components/site/blog-explorer";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal, RevealLine } from "@/components/site/reveal";
import { blogPosts, pageMeta } from "@/lib/site";
import { formatDate } from "@/lib/utils";

const meta = pageMeta["/office/polished-dental-blog"];
const featured = blogPosts[0];

export const metadata: Metadata = {
  title: "Polished Dental Blog",
  description: meta.description,
  alternates: { canonical: "/office/polished-dental-blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-bone">
        <div className="pointer-events-none absolute -right-40 top-0 size-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,123,81,0.18),transparent_65%)]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 size-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(174,189,170,0.4),transparent_65%)]" />

        <div className="shell relative grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-28 lg:pt-20">
          <div>
            <Reveal y={12}>
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink/70"
              >
                <Link href="/" className="transition-colors hover:text-clay-deep">
                  Home
                </Link>
                <ChevronRight className="size-3 text-ink/70" />
                <Link href="/office" className="transition-colors hover:text-clay-deep">
                  Office
                </Link>
                <ChevronRight className="size-3 text-ink/70" />
                <span className="text-ink/70">Blog</span>
              </nav>
            </Reveal>

            <Reveal y={16}>
              <p className="eyebrow text-clay-deep">The journal</p>
            </Reveal>

            <h1 className="mt-5 font-display text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.9] tracking-[-0.05em] text-ink">
              <RevealLine>Notes from</RevealLine>
              <RevealLine delay={0.08}>
                <span className="italic text-pine">the practice.</span>
              </RevealLine>
            </h1>

            <Reveal delay={0.18} y={18}>
              <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-ink/70">
                {meta.description}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink/70">
                <span>{blogPosts.length} articles</span>
                <span className="hidden size-1 rounded-full bg-clay/60 sm:block" />
                <span>Prevention · Technology · Cosmetic</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={30}>
            <Link
              href={`/office/polished-dental-blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-ink/10 bg-mist shadow-[0_40px_100px_-50px_rgba(17,36,31,0.5)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={featured.hero}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-[0.52rem] uppercase tracking-[0.18em] text-champagne">
                  Latest · {formatDate(featured.date)}
                </p>
                <p className="mt-2 max-w-md font-display text-3xl leading-[1.02] tracking-[-0.03em] text-paper sm:text-4xl">
                  {featured.title}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.54rem] uppercase tracking-[0.16em] text-paper/70">
                  Read the note
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <BlogExplorer posts={blogPosts} />
        </div>
      </section>

      <CtaBand
        title="A healthy smile is a habit, not a hurry."
        description="If a question comes up between appointments, our team is always glad to help."
      />
    </>
  );
}
