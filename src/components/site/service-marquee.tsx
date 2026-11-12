import { serviceMenu } from "@/lib/site";

export function ServiceMarquee({ tone = "light" }: { tone?: "light" | "dark" }) {
  const items = [...serviceMenu, ...serviceMenu];
  return (
    <div
      className={
        tone === "light"
          ? "overflow-hidden border-y border-ink/10 bg-bone/60 py-5"
          : "overflow-hidden border-y border-paper/10 bg-forest py-5 text-paper"
      }
    >
      <div className="marquee-track gap-10">
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10"
          >
            <span
              className={
                tone === "light"
                  ? "font-display text-xl italic tracking-[-0.02em] text-ink/70 md:text-2xl"
                  : "font-display text-xl italic tracking-[-0.02em] text-paper/60 md:text-2xl"
              }
            >
              {item}
            </span>
            <span
              className={
                tone === "light"
                  ? "size-1.5 rounded-full bg-clay/70"
                  : "size-1.5 rounded-full bg-champagne/70"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
