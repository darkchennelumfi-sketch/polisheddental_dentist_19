import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/site/article-page";
import { firstParagraph, pages } from "@/lib/site";

const slugs = [
  "first-visit",
  "emergencies",
  "brushing-and-flossing",
  "oral-hygiene-for-kids",
  "periodontal-gum-disease",
  "digital-x-rays",
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[`patient/${slug}`];
  if (!page) return {};
  return {
    title: page.title,
    description: firstParagraph(page.blocks).slice(0, 155),
    alternates: { canonical: `/patient/${slug}` },
  };
}

export default async function PatientArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!pages[`patient/${slug}`]) notFound();
  return (
    <ArticlePage
      route={`patient/${slug}`}
      parentLabel="Patient"
      parentHref="/patient"
    />
  );
}
