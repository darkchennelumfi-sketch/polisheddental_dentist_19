"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "General & restorative",
    href: "/treatment",
    label: "The everyday essentials",
    description:
      "Exams, cleanings, fillings, crowns, bridges, root canals, and extractions — the dependable core of a healthy smile.",
    image: "/images/bill-and-karen-resized.jpg",
    meta: "Exams · Cleanings · Crowns",
  },
  {
    title: "Cosmetic dentistry",
    href: "/cosmetic-dentistry",
    label: "Refined, never overdone",
    description:
      "Tooth-colored fillings, crowns, whitening, and smile makeovers designed to look like the best version of you.",
    image: "/images/christina-and-brent-resized.jpg",
    meta: "Whitening · Veneers · Smile design",
  },
  {
    title: "Dental implants",
    href: "/treatment/dental-implants",
    label: "A lasting foundation",
    description:
      "A natural-looking replacement for missing teeth, with a complimentary consultation to talk through your options.",
    image: "/images/our-doctors.jpg",
    meta: "Complimentary consultations",
  },
  {
    title: "Pediatric dentistry",
    href: "/pediatric-dentistry",
    label: "Small patients, big care",
    description:
      "Gentle first visits, sealants, and nitrous oxide for growing smiles — and the parents who love them.",
    image: "/images/boston-and-lincoln-45.jpg",
    meta: "Sealants · Nitrous oxide",
  },
  {
    title: "CEREC one-visit crowns",
    href: "/treatment/cerec",
    label: "One visit. One crown.",
    description:
      "Computer-designed, milled, and placed in a single appointment. No temporary crowns, no second visit.",
    image: "/images/macie-resized.jpg",
    meta: "Designed · Milled · Placed",
  },
  {
    title: "TMJ & BOTOX",
    href: "/treatment/tmj-disorders",
    label: "Relief, thoughtfully delivered",
    description:
      "Conservative care for jaw pain and tension, with BOTOX offered by dentists who understand the facial muscles.",
    image: "/images/fridley-resized.jpg",
    meta: "Jaw pain · Tension · BOTOX",
  },
];

export function ServiceShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div className="border-t border-ink/10">
        {services.map((service, index) => (
          <Link
            key={service.href}
            href={service.href}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className={cn(
              "group relative flex items-center justify-between gap-4 border-b border-ink/10 py-6 transition-colors md:py-8",
              active === index ? "text-ink" : "text-ink/70 hover:text-ink",
            )}
          >
            <span className="absolute inset-y-0 left-0 w-px bg-clay opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-baseline gap-5 pl-1 sm:gap-8">
              <span className="font-mono text-[0.6rem] tracking-[0.16em] text-ink/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-[clamp(1.8rem,3.4vw,3rem)] leading-none tracking-[-0.035em]">
                  {service.title}
                </h3>
                <p className="mt-2 hidden max-w-md text-[0.78rem] leading-relaxed text-ink/70 sm:block">
                  {service.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-xl sm:size-16 lg:hidden">
                <Image src={service.image} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-ink/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-deep" />
            </div>
          </Link>
        ))}
      </div>

      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl border border-ink/10 bg-mist">
            <div className="relative aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[active].image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[active].image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 0px, 420px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-forest/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-champagne">
                  {services[active].label}
                </p>
                <p className="mt-2 font-display text-3xl leading-tight text-paper">
                  {services[active].title}
                </p>
                <p className="mt-2 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-paper/60">
                  {services[active].meta}
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/70">
            Hover to explore · tap a service to read more
          </p>
        </div>
      </div>
    </div>
  );
}
