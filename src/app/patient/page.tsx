import type { Metadata } from "next";
import { OverviewTemplate } from "@/components/site/overview-template";
import { pageMeta } from "@/lib/site";

const meta = pageMeta["/patient"];

export const metadata: Metadata = {
  title: "Patient Resources",
  description: meta.description,
  alternates: { canonical: "/patient" },
};

export default function PatientPage() {
  return <OverviewTemplate group="patient" />;
}
