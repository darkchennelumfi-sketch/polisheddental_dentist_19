"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Facebook,
  X,
} from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const mainNav = navigation.filter((item) => item.label !== "Home");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpen(null);
      setMobileOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <>
      <div className="relative z-40 hidden border-b border-ink/10 bg-forest text-paper/75 lg:block">
        <div className="shell flex h-9 items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em]">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-champagne" />
            New patients welcome in Bismarck, North Dakota
          </p>
          <div className="flex items-center gap-6">
            <a
              href={site.phone.href}
              className="flex items-center gap-2 transition-colors hover:text-paper"
            >
              <Phone className="size-3" />
              {site.phone.plain}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="size-3" />
              Mon–Thu 7 a.m.–4 p.m.
            </span>
            <span className="h-3 w-px bg-paper/20" />
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Polished Dental on Facebook"
              className="transition-colors hover:text-paper"
            >
              <Facebook className="size-3.5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Polished Dental on Instagram"
              className="transition-colors hover:text-paper"
            >
              <Instagram className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-500",
          scrolled
            ? "glass border-ink/10 shadow-[0_10px_40px_-30px_rgba(17,36,31,0.5)]"
            : "border-transparent bg-paper/80 backdrop-blur-sm",
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between gap-6 transition-all duration-500",
            scrolled ? "h-[4.4rem]" : "h-[5.6rem]",
          )}
        >
          <Logo compact={scrolled} />

          <div ref={navRef} className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[0.8rem] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:bg-ink/[0.04] hover:text-ink",
                      isActive && "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }
              const isOpen = open === item.label;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpen(item.label)}
                  onMouseLeave={() => setOpen(null)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-full py-2 pl-3.5 pr-1 text-[0.8rem] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink",
                        isActive && "text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Open ${item.label} menu`}
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : item.label)}
                      className="rounded-full p-1.5 text-ink/70 transition-colors hover:text-ink"
                    >
                      <ChevronDown
                        className={cn(
                          "size-3 transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 top-[calc(100%+0.65rem)] w-[22rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-ink/10 bg-paper p-2 shadow-[0_30px_70px_-35px_rgba(17,36,31,0.55)] transition-all duration-200",
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0",
                    )}
                  >
                    <div className="px-3 pb-2 pt-2">
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-ink/70">
                        {item.description}
                      </p>
                    </div>
                    <div className="grid gap-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="group flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-bone"
                        >
                          <span>
                            <span className="block text-[0.82rem] font-medium text-ink">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-0.5 block text-[0.7rem] leading-snug text-ink/70">
                                {child.description}
                              </span>
                            ) : null}
                          </span>
                          <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-ink/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-deep" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/appointment">
                Request a visit
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-4" />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[80] bg-forest/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-[90] flex h-full w-[min(92vw,26rem)] flex-col overflow-y-auto bg-paper p-6 shadow-2xl outline-none">
                  <div className="flex items-center justify-between">
                    <Logo compact />
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="size-5" />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Title className="sr-only">Polished Dental navigation</Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Browse the pages of Polished Dental.
                  </Dialog.Description>

                  <div className="mt-8 border-y border-ink/10 py-5">
                    <p className="eyebrow text-clay-deep">A brighter visit starts here</p>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/appointment">
                        Request an appointment
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>

                  <nav className="mt-6 flex-1">
                    <Link
                      href="/"
                      className="block border-b border-ink/10 py-3 font-display text-2xl text-ink"
                    >
                      Home
                    </Link>
                    {mainNav.map((item) => (
                      <MobileNavGroup key={item.href} item={item} />
                    ))}
                  </nav>

                  <div className="mt-8 space-y-3 rounded-2xl bg-bone p-5 text-sm">
                    <a href={site.phone.href} className="flex items-center gap-3 font-medium">
                      <Phone className="size-4 text-clay-deep" />
                      {site.phone.plain}
                    </a>
                    <p className="flex items-start gap-3 text-ink/70">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                      {site.address.street} {site.address.city}, {site.address.state}{" "}
                      {site.address.zip}
                    </p>
                    <p className="flex items-start gap-3 text-ink/70">
                      <Clock className="mt-0.5 size-4 shrink-0 text-clay-deep" />
                      Mon–Thu 7 a.m.–4 p.m. · Friday morning emergency calls
                    </p>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileNavGroup({ item }: { item: (typeof mainNav)[number] }) {
  const [expanded, setExpanded] = useState(false);
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block border-b border-ink/10 py-3 font-display text-2xl text-ink"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-ink/10">
      <div className="flex items-center justify-between">
        <Link href={item.href} className="py-3 font-display text-2xl text-ink">
          {item.label}
        </Link>
        <button
          type="button"
          aria-label={`Toggle ${item.label} links`}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="rounded-full p-2 text-ink/70"
        >
          <ChevronDown
            className={cn("size-4 transition-transform", expanded && "rotate-180")}
          />
        </button>
      </div>
      <div
        className={cn(
          "grid transition-all duration-300",
          expanded ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-1 border-l border-ink/10 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="py-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
