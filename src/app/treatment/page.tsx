import type { Metadata } from "next";
import { OverviewTemplate } from "@/components/site/overview-template";
import { pageMeta } from "@/lib/site";

const meta = pageMeta["/treatment"];

export const metadata: Metadata = {
  title: "Treatment",
  description: meta.description,
  alternates: { canonical: "/treatment" },
};

export default function TreatmentPage() {
  return <OverviewTemplate group="treatment" />;
}
