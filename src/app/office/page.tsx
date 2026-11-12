import type { Metadata } from "next";
import { OverviewTemplate } from "@/components/site/overview-template";
import { pageMeta } from "@/lib/site";

const meta = pageMeta["/office"];

export const metadata: Metadata = {
  title: "Office",
  description: meta.description,
  alternates: { canonical: "/office" },
};

export default function OfficePage() {
  return <OverviewTemplate group="office" />;
}
