import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { ArticleBody } from "@/components/site/article-body";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { blogPosts } from "@/lib/site";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/office/polished-dental-blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: new Date(post.date).toISOString(),
      images: [{ url: post.hero }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const more = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute -left-40 top-1/2 size-[38rem] -translate-y-1/2 rounded-full border border-paper/10" />
        <div className="pointer-events-none absolute -left-24 top-1/2 size-[26rem] -translate-y-1/2 rounded-full border border-paper/10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(199,165,107,0.16),transparent_60%)]" />

        <div className="shell relative py-12 md:py-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-paper/60"
          >
            <Link href="/" className="transition-colors hover:text-champagne">
              Home
            </Link>
            <ChevronRight className="size-3 text-paper/60" />
            <Link href="/office" className="transition-colors hover:text-champagne">
              Office
            </Link>
            <ChevronRight className="size-3 text-paper/60" />
            <Link
              href="/office/polished-dental-blog"
              className="transition-colors hover:text-champagne"
            >
              Journal
            </Link>
            <ChevronRight className="size-3 text-paper/60" />
            <span className="max-w-[15rem] truncate text-paper/60">{post.title}</span>
          </nav>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Reveal y={14}>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-champagne/80">
                  <span className="rounded-full border border-champagne/25 px-3 py-1.5">
                    {post.category}
                  </span>
                  <span>{formatDate(post.date)}</span>
                  <span className="size-1 rounded-full bg-champagne/50" />
                  <span>{post.read}</span>
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6.2vw,5.6rem)] leading-[0.93] tracking-[-0.045em]">
                {post.title}
              </h1>

              <Reveal delay={0.12}>
                <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-paper/60">
                  {post.summary}
                </p>
                <p className="mt-6 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-paper/60">
                  Written by the team at Polished Dental
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.16} y={28}>
              <div className="relative mx-auto w-full max-w-[20rem]">
                <div className="pointer-events-none absolute -right-5 -top-5 size-24 rounded-full border border-paper/15" />
                <div className="relative overflow-hidden rounded-[1.6rem] border border-paper/15 bg-mist">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={post.hero}
                      alt=""
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-paper/15 pt-6">
            <Link
              href="/office/polished-dental-blog"
              className="inline-flex items-center gap-2 font-mono text-[0.56rem] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:text-champagne"
            >
              <ArrowLeft className="size-3.5" />
              Back to the journal
            </Link>
          </div>
        </div>
      </section>

      <ArticleBody
        blocks={post.blocks}
        related={post.related}
        showToc
      />

      <section className="border-t border-ink/10 bg-bone/50 py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-clay-deep">Keep reading</p>
              <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] text-ink">
                More from the journal.
              </h2>
            </div>
            <Link
              href="/office/polished-dental-blog"
              className="link-underline self-start font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink/70 hover:text-ink"
            >
              All articles
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {more.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={`/office/polished-dental-blog/${item.slug}`}
                  className="group block rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-ink/25"
                >
                  <p className="font-mono text-[0.52rem] uppercase tracking-[0.15em] text-ink/70">
                    {item.category} · {formatDate(item.date)}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-[1.1] tracking-[-0.025em] text-ink transition-colors group-hover:text-pine">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-clay-deep">
                    Read
                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question the article didn't answer?"
        description="Call the office or send us a note. We're always happy to talk through the details."
      />
    </>
  );
}
