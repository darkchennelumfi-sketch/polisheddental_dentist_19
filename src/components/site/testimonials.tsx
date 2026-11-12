"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { reviews } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 7500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () =>
    setIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((current) => (current + 1) % reviews.length);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-ink/10 bg-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") previous();
        if (event.key === "ArrowRight") next();
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      tabIndex={0}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,123,81,0.14),transparent_70%)]" />
      <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16 lg:p-16">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="eyebrow text-clay-deep">In their words</p>
            <p className="mt-5 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] tracking-[-0.04em] text-ink">
              Real patients.
              <br />
              <span className="italic text-pine">Real words.</span>
            </p>
            <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-ink/70">
              Shared via RevenueWell
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous review"
              className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
            >
              <ArrowRight className="size-4" />
            </button>
            <div className="ml-3 flex gap-1.5">
              {reviews.map((review, dotIndex) => (
                <button
                  key={review.author + dotIndex}
                  type="button"
                  aria-label={`Go to review ${dotIndex + 1}`}
                  aria-current={dotIndex === index}
                  onClick={() => setIndex(dotIndex)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    dotIndex === index ? "w-6 bg-clay" : "w-1.5 bg-ink/15 hover:bg-ink/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative min-h-[18rem] sm:min-h-[15rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col justify-between gap-8"
            >
              <div>
                <Quote className="size-8 text-clay-deep" strokeWidth={1.2} />
                <blockquote className="mt-5 font-display text-[clamp(1.3rem,2.3vw,2rem)] leading-[1.28] tracking-[-0.02em] text-ink">
                  “{reviews[index].quote}”
                </blockquote>
              </div>
              <figcaption className="flex items-end justify-between gap-6 border-t border-ink/10 pt-5">
                <div>
                  <p className="text-sm font-medium text-ink">{reviews[index].author}</p>
                  <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-ink/70">
                    {reviews[index].date}
                  </p>
                </div>
                <p className="hidden text-right font-mono text-[0.55rem] uppercase tracking-[0.14em] text-ink/70 sm:block">
                  {reviews[index].title}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
