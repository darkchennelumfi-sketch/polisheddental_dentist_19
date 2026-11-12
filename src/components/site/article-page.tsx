import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ArticleBody } from "@/components/site/article-body";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { pages, pageMeta, site } from "@/lib/site";

export function ArticlePage({
  route,
  parentLabel,
  parentHref,
  eyebrow,
  description,
}: {
  route: string;
  parentLabel: string;
  parentHref: string;
  eyebrow?: string;
  description?: string;
}) {
  const page = pages[route];
  if (!page) return null;
  const meta = pageMeta[`/${route}`];

  return (
    <>
      <PageHero
        eyebrow={eyebrow ?? meta?.eyebrow ?? parentLabel}
        title={page.title}
        description={description ?? meta?.description ?? ""}
        image={page.banner || "/images/front-desk-resized.jpg"}
        crumbs={[
          { label: "Home", href: "/" },
          { label: parentLabel, href: parentHref },
          { label: page.title },
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

      <ArticleBody
        blocks={page.blocks}
        images={page.images}
        related={page.related}
      />

      <CtaBand />
    </>
  );
}
