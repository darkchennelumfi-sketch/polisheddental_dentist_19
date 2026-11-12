import type { Metadata } from "next";
import { OverviewTemplate } from "@/components/site/overview-template";
import { pageMeta } from "@/lib/site";

const meta = pageMeta["/cosmetic-dentistry"];

export const metadata: Metadata = {
  title: "Cosmetic Dentistry",
  description: meta.description,
  alternates: { canonical: "/cosmetic-dentistry" },
};

export default function CosmeticDentistryPage() {
  return <OverviewTemplate group="cosmetic" />;
}
