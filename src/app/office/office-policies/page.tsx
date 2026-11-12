import type { Metadata } from "next";
import { CalendarClock, Clock, ShieldCheck, Sun } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { ArticleBody } from "@/components/site/article-body";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { pageMeta, pages } from "@/lib/site";

const meta = pageMeta["/office/office-policies"];
const page = pages["office/office-policies"];

const facts = [
  { icon: Clock, label: "Office hours", value: "Mon–Thu, 7 a.m.–4 p.m." },
  { icon: Sun, label: "Summer hours", value: "Mon–Thu, 7 a.m.–3:30 p.m." },
  { icon: CalendarClock, label: "Cancellations", value: "24-hour notice requested" },
  { icon: ShieldCheck, label: "Insurance", value: "Claims billed as a service" },
];

export const metadata: Metadata = {
  title: "Office Policies",
  description: meta.description,
  alternates: { canonical: "/office/office-policies" },
};

export default function OfficePoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow={meta.eyebrow}
        title="Clear from the start."
        description={meta.description}
        image={page.banner}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Office", href: "/office" },
          { label: "Office Policies" },
        ]}
        priority
      />

      <section className="border-b border-ink/10 bg-bone/50 py-10 md:py-12">
        <div className="shell">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Reveal key={fact.label} delay={index * 0.05}>
                  <div className="flex h-full items-start gap-4 bg-paper p-5">
                    <Icon className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                    <div>
                      <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink/70">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-[0.82rem] leading-snug text-ink/70">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ArticleBody
        blocks={page.blocks}
        images={page.images}
        related={[]}
        showToc
      />

      <CtaBand
        title="Questions about a policy?"
        description="Call the office and we'll walk through it with you. Clear answers are part of the care."
      />
    </>
  );
}
