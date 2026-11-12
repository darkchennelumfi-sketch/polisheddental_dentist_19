import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/site/article-page";
import { firstParagraph, pages } from "@/lib/site";

const slugs = ["dental-sealants", "nitrous-oxide"];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[`pediatric-dentistry/${slug}`];
  if (!page) return {};
  return {
    title: page.title,
    description: firstParagraph(page.blocks).slice(0, 155),
    alternates: { canonical: `/pediatric-dentistry/${slug}` },
  };
}

export default async function PediatricArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!pages[`pediatric-dentistry/${slug}`]) notFound();
  return (
    <ArticlePage
      route={`pediatric-dentistry/${slug}`}
      parentLabel="Pediatric Dentistry"
      parentHref="/pediatric-dentistry"
    />
  );
}
