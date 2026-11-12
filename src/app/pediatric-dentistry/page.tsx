import type { Metadata } from "next";
import { OverviewTemplate } from "@/components/site/overview-template";
import { pageMeta } from "@/lib/site";

const meta = pageMeta["/pediatric-dentistry"];

export const metadata: Metadata = {
  title: "Pediatric Dentistry",
  description: meta.description,
  alternates: { canonical: "/pediatric-dentistry" },
};

export default function PediatricDentistryPage() {
  return <OverviewTemplate group="pediatric" />;
}
