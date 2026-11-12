"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Please share a little more detail.").max(1200),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [draft, setDraft] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (data: FormValues) => {
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "(not provided)"}`,
      "",
      data.message,
    ].join("\n");
    const link = `mailto:${site.email}?subject=${encodeURIComponent(
      `Website message from ${data.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setDraft(link);
    setSent(true);
    window.setTimeout(() => {
      window.location.href = link;
    }, 250);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-paper p-7">
        <div className="grid size-12 place-items-center rounded-full bg-pine text-paper">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 font-display text-3xl leading-tight tracking-[-0.03em] text-ink">
          Your note is ready to send.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          We&apos;ve prepared an email to our team. If your email app didn&apos;t open, use
          the button below. We usually reply during office hours.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="sm">
            <a href={draft}>
              <Mail className="size-3.5" />
              Open email draft
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={site.phone.href}>Call the office</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-ink/10 bg-paper p-6 md:p-7">
      <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-clay-deep">
        Send a note
      </p>
      <h3 className="mt-2 font-display text-3xl leading-tight tracking-[-0.03em] text-ink">
        We&apos;re listening.
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" autoComplete="name" {...register("name")} />
          {errors.name ? <p className="mt-1.5 text-[0.7rem] text-copper-deep">{errors.name.message}</p> : null}
        </div>
        <div>
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? <p className="mt-1.5 text-[0.7rem] text-copper-deep">{errors.email.message}</p> : null}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input id="contact-phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="contact-message">How can we help?</Label>
          <Textarea id="contact-message" rows={4} {...register("message")} />
          {errors.message ? <p className="mt-1.5 text-[0.7rem] text-copper-deep">{errors.message.message}</p> : null}
        </div>
      </div>
      <Button type="submit" className="mt-5 w-full">
        <Send className="size-4" />
        Prepare message
      </Button>
      <p className="mt-3 text-[0.66rem] leading-relaxed text-ink/70">
        This opens an email draft in your mail app. For urgent dental needs, call{" "}
        <a href={site.phone.href} className="text-copper-deep underline underline-offset-2">
          {site.phone.plain}
        </a>
        .
      </p>
    </form>
  );
}
