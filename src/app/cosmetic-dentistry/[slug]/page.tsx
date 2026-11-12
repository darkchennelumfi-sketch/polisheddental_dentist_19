import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/site/article-page";
import { firstParagraph, pages } from "@/lib/site";

const slugs = [
  "crowns-and-bridgework",
  "smile-makeover",
  "tooth-colored-fillings",
  "botox-dermal-fillers",
  "kor-whitening",
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[`cosmetic-dentistry/${slug}`];
  if (!page) return {};
  return {
    title: page.title,
    description: firstParagraph(page.blocks).slice(0, 155),
    alternates: { canonical: `/cosmetic-dentistry/${slug}` },
  };
}

export default async function CosmeticArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!pages[`cosmetic-dentistry/${slug}`]) notFound();
  return (
    <ArticlePage
      route={`cosmetic-dentistry/${slug}`}
      parentLabel="Cosmetic Dentistry"
      parentHref="/cosmetic-dentistry"
    />
  );
}
