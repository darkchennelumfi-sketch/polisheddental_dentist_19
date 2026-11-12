"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type FaqItem } from "@/lib/site";

export function FaqAccordion({
  items,
  defaultOpen,
}: {
  items: FaqItem[];
  defaultOpen?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen}
      className="border-t border-ink/10"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger>
            <span className="flex items-baseline gap-4">
              <span className="font-mono text-[0.58rem] tracking-[0.16em] text-clay-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl leading-snug tracking-[-0.015em] text-ink sm:text-2xl">
                {item.question}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-9 sm:pl-10">
              <p>{item.answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqInline() {
  return (
    <div className="rounded-2xl border border-ink/10 bg-bone/60 p-6">
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink/70">
        Still curious?
      </p>
      <p className="mt-3 font-display text-2xl leading-tight text-ink">
        We&apos;re happy to answer the question you haven&apos;t asked yet.
      </p>
      <Link
        href="/contact-us"
        className="mt-4 inline-flex items-center gap-2 text-sm text-copper-deep transition-colors hover:text-ink"
      >
        Get in touch
        <ArrowUpRight className="size-3.5" />
      </Link>
    </div>
  );
}
