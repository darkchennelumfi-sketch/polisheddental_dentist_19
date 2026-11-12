import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ArticleBody } from "@/components/site/article-body";
import { CtaBand } from "@/components/site/cta-band";
import { pageMeta, pages } from "@/lib/site";

const meta = pageMeta["/privacy-policy"];
const page = pages["privacy-policy"];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: meta.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Your privacy, protected."
        description={meta.description}
        image={page.banner}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        priority
        meta="Effective April 14, 2003"
      />

      <ArticleBody blocks={page.blocks} showToc />

      <CtaBand
        title="Questions about your privacy?"
        description="If you have a question about this notice or how your information is handled, please contact our office."
      />
    </>
  );
}
