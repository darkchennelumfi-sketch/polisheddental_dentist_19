import Link from "next/link";
import {
  Activity,
  Anchor,
  ArrowUpRight,
  Brush,
  CalendarDays,
  CircleHelp,
  ClipboardList,
  Cpu,
  CreditCard,
  Crown,
  DoorOpen,
  Droplet,
  FileText,
  HeartPulse,
  Map,
  PenLine,
  ScanLine,
  Shield,
  ShieldCheck,
  Smile,
  Sparkle,
  Sparkles,
  Stethoscope,
  Sun,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { type Service } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  users: Users,
  sparkles: Sparkles,
  clipboard: ClipboardList,
  card: CreditCard,
  map: Map,
  pen: PenLine,
  calendar: CalendarDays,
  door: DoorOpen,
  help: CircleHelp,
  file: FileText,
  heart: HeartPulse,
  brush: Brush,
  smile: Smile,
  shield: Shield,
  scan: ScanLine,
  tooth: Smile,
  activity: Activity,
  anchor: Anchor,
  shieldCheck: ShieldCheck,
  cpu: Cpu,
  crown: Crown,
  droplet: Droplet,
  sparkle: Sparkle,
  sun: Sun,
  wind: Wind,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
}

export function ServiceCard({
  service,
  index,
  tone = "light",
}: {
  service: Service;
  index: number;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={service.href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-500",
        tone === "light"
          ? "border-ink/10 bg-paper hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_60px_-40px_rgba(17,36,31,0.45)]"
          : "border-paper/15 bg-paper/[0.04] hover:border-champagne/40 hover:bg-paper/[0.07]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid size-11 place-items-center rounded-full border transition-colors",
            tone === "light"
              ? "border-ink/10 bg-bone text-pine group-hover:border-clay/40 group-hover:text-clay-deep"
              : "border-paper/15 text-champagne",
          )}
        >
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        <span
          className={cn(
            "font-mono text-[0.6rem] uppercase tracking-[0.18em]",
            tone === "light" ? "text-ink/70" : "text-paper/60",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2">
          <h3
            className={cn(
              "font-display text-2xl leading-tight tracking-[-0.02em]",
              tone === "light" ? "text-ink" : "text-paper",
            )}
          >
            {service.title}
          </h3>
          {service.tag ? (
            <span className="rounded-full bg-clay/10 px-2 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.12em] text-clay-deep">
              {service.tag}
            </span>
          ) : null}
        </div>
        <p
          className={cn(
            "mt-2 max-w-[24rem] text-[0.8rem] leading-relaxed",
            tone === "light" ? "text-ink/70" : "text-paper/60",
          )}
        >
          {service.description}
        </p>
      </div>

      <div
        className={cn(
          "mt-6 flex items-center justify-between border-t pt-4",
          tone === "light" ? "border-ink/10" : "border-paper/10",
        )}
      >
        <span
          className={cn(
            "font-mono text-[0.55rem] uppercase tracking-[0.18em]",
            tone === "light" ? "text-ink/70" : "text-paper/60",
          )}
        >
          Explore
        </span>
        <ArrowUpRight
          className={cn(
            "size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            tone === "light" ? "text-ink/70" : "text-paper/60",
          )}
        />
      </div>
    </Link>
  );
}
