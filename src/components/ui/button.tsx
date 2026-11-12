import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-[-0.01em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-pine hover:shadow-[0_18px_40px_-20px_rgba(17,36,31,0.7)]",
        clay: "bg-clay text-paper hover:bg-copper hover:shadow-[0_18px_40px_-20px_rgba(196,123,81,0.8)]",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink/50 hover:bg-ink/[0.04]",
        light:
          "bg-paper text-ink hover:bg-bone hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]",
        ghost: "text-ink hover:bg-ink/[0.05]",
        "ghost-light": "text-paper/80 hover:bg-paper/10 hover:text-paper",
      },
      size: {
        default: "h-12 rounded-full px-6",
        sm: "h-10 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-8 text-[0.95rem]",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
