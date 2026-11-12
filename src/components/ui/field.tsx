import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-ink/15 bg-paper px-4 py-2 text-sm text-ink shadow-[0_1px_0_rgba(17,36,31,0.03)] transition-colors placeholder:text-ink/70 focus-visible:border-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-28 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink shadow-[0_1px_0_rgba(17,36,31,0.03)] transition-colors placeholder:text-ink/70 focus-visible:border-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/20 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "mb-2 block font-mono text-[0.66rem] font-medium uppercase tracking-[0.16em] text-ink/70",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";

const Select = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select">
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "flex h-12 w-full appearance-none rounded-xl border border-ink/15 bg-paper px-4 pr-10 text-sm text-ink transition-colors focus-visible:border-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-ink/70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="m3 6 5 5 5-5" />
    </svg>
  </div>
));
Select.displayName = "Select";

export { Input, Textarea, Label, Select };
