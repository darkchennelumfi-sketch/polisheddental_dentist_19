import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/site/article-page";
import { firstParagraph, pages } from "@/lib/site";

const slugs = [
  "general-treatment",
  "tmj-disorders",
  "dental-implants",
  "root-canal-treatment",
  "cerec",
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[`treatment/${slug}`];
  if (!page) return {};
  return {
    title: page.title,
    description: firstParagraph(page.blocks).slice(0, 155),
    alternates: { canonical: `/treatment/${slug}` },
  };
}

export default async function TreatmentArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!pages[`treatment/${slug}`]) notFound();
  return (
    <ArticlePage
      route={`treatment/${slug}`}
      parentLabel="Treatment"
      parentHref="/treatment"
    />
  );
}
