"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  firstName: z.string().min(2, "Please tell us your first name."),
  lastName: z.string().min(2, "Please tell us your last name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone number we can reach you at."),
  patientType: z.enum(["New patient", "Returning patient"]),
  service: z.string().min(1, "Please choose a reason for your visit."),
  preferredDay: z.string().optional(),
  preferredTime: z.enum(["Morning", "Midday", "Afternoon", "No preference"]),
  message: z.string().max(1200, "Please keep your note under 1,200 characters.").optional(),
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm that we may contact you about this request.",
  }),
});

type FormValues = z.infer<typeof schema>;

const steps = [
  { title: "About you", eyebrow: "Step one" },
  { title: "Your visit", eyebrow: "Step two" },
  { title: "A little more", eyebrow: "Step three" },
];

const serviceOptions = [
  "New patient exam & cleaning",
  "Routine cleaning & checkup",
  "General treatment",
  "Cosmetic dentistry",
  "Dental implants",
  "CEREC same-day crown",
  "TMJ / BOTOX consultation",
  "Pediatric dentistry",
  "Dental emergency",
  "Something else",
];

const storageKey = "polished-appointment-draft";

export function AppointmentForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [mailto, setMailto] = useState("");
  const [draftRestored, setDraftRestored] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      patientType: "New patient",
      service: "",
      preferredDay: "",
      preferredTime: "No preference",
      message: "",
      consent: false,
    },
    mode: "onTouched",
  });

  const values = useWatch({ control }) as FormValues;

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) reset(JSON.parse(stored) as Partial<FormValues>);
    } catch {
      // Ignore malformed drafts.
    }
    const frame = window.requestAnimationFrame(() => setDraftRestored(true));
    return () => window.cancelAnimationFrame(frame);
  }, [reset]);

  useEffect(() => {
    if (!draftRestored || submitted) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(values));
    } catch {
      // Storage can be unavailable in private browsing.
    }
  }, [values, submitted, draftRestored]);

  const next = async () => {
    const fields: (keyof FormValues)[][] = [
      ["firstName", "lastName", "email", "phone"],
      ["patientType", "service", "preferredTime"],
      ["consent"],
    ];
    const valid = await trigger(fields[step]);
    if (valid) setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const onSubmit = (data: FormValues) => {
    const body = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Patient type: ${data.patientType}`,
      `Reason for visit: ${data.service}`,
      `Preferred day: ${data.preferredDay || "No preference"}`,
      `Preferred time: ${data.preferredTime}`,
      "",
      "Notes:",
      data.message || "(none)",
    ].join("\n");

    const link = `mailto:${site.email}?subject=${encodeURIComponent(
      `Appointment request — ${data.firstName} ${data.lastName}`,
    )}&body=${encodeURIComponent(body)}`;

    setMailto(link);
    setSubmitted(true);
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      // Ignore storage errors.
    }
    window.setTimeout(() => {
      window.location.href = link;
    }, 250);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-ink/10 bg-paper p-8 md:p-10"
      >
        <div className="grid size-14 place-items-center rounded-full bg-pine text-paper">
          <Check className="size-6" />
        </div>
        <p className="mt-6 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-clay-deep">
          Request prepared
        </p>
        <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.035em] text-ink">
          One last tap — send it our way.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70">
          Your email app should open with the details below. If it doesn&apos;t, use
          the button to open the draft again, or simply call the office and we&apos;ll
          take care of the rest.
        </p>
        <div className="mt-7 rounded-2xl border border-ink/10 bg-bone/60 p-5 text-sm">
          <p className="font-medium text-ink">
            {values.firstName} {values.lastName}
          </p>
          <p className="mt-1 text-ink/70">
            {values.service} · {values.preferredTime}
            {values.preferredDay ? ` · ${values.preferredDay}` : ""}
          </p>
          <p className="mt-1 text-ink/70">
            {values.email} · {values.phone}
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <a href={mailto}>
              <Mail className="size-4" />
              Open email draft
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.phone.href}>
              <Phone className="size-4" />
              Call {site.phone.plain}
            </a>
          </Button>
        </div>
        <p className="mt-5 text-[0.7rem] leading-relaxed text-ink/70">
          This request is not a confirmed appointment. Our team will follow up to
          find a time that works.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-paper">
      <div className="border-b border-ink/10 bg-bone/50 px-6 py-5 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-clay-deep">
              {steps[step].eyebrow}
            </p>
            <p className="mt-1 font-display text-2xl text-ink">{steps[step].title}</p>
          </div>
          <p className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink/70">
            0{step + 1} / 03
          </p>
        </div>
        <div className="mt-4 flex gap-1.5">
          {steps.map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-500",
                index <= step ? "bg-clay" : "bg-ink/10",
              )}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
                  <Error message={errors.firstName?.message} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
                  <Error message={errors.lastName?.message} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" autoComplete="email" {...register("email")} />
                  <Error message={errors.email?.message} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
                  <Error message={errors.phone?.message} />
                </div>
                <div className="sm:col-span-2">
                  <p className="flex items-start gap-2 rounded-xl bg-bone/70 p-4 text-[0.72rem] leading-relaxed text-ink/70">
                    <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-clay" />
                    We use these details only to respond to your appointment
                    request. Prefer to talk? Call{" "}
                    <a href={site.phone.href} className="font-medium text-copper-deep underline underline-offset-2">
                      {site.phone.plain}
                    </a>
                    .
                  </p>
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="patientType">I am a</Label>
                  <Select id="patientType" {...register("patientType")}>
                    <option>New patient</option>
                    <option>Returning patient</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service">Reason for visit</Label>
                  <Select id="service" {...register("service")}>
                    <option value="">Choose one</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                  <Error message={errors.service?.message} />
                </div>
                <div>
                  <Label htmlFor="preferredDay">Preferred day</Label>
                  <Input
                    id="preferredDay"
                    placeholder="e.g. Tuesday, or a date"
                    {...register("preferredDay")}
                  />
                </div>
                <div>
                  <Label htmlFor="preferredTime">Preferred time</Label>
                  <Select id="preferredTime" {...register("preferredTime")}>
                    <option>Morning</option>
                    <option>Midday</option>
                    <option>Afternoon</option>
                    <option>No preference</option>
                  </Select>
                </div>
                <p className="sm:col-span-2 text-[0.72rem] leading-relaxed text-ink/70">
                  Requests are not confirmed until our team replies. If you are in
                  pain or have a dental emergency, please call the office directly.
                </p>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5">
                <div>
                  <Label htmlFor="message">Anything we should know? (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Concerns, accessibility needs, or a note about your smile goals…"
                    {...register("message")}
                  />
                  <Error message={errors.message?.message} />
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-ink/10 bg-bone/40 p-4">
                  <input
                    type="checkbox"
                    className="mt-0.5 size-4 shrink-0 accent-clay"
                    {...register("consent")}
                  />
                  <span className="text-[0.78rem] leading-relaxed text-ink/70">
                    I agree that Polished Dental may contact me by phone or email
                    about this appointment request. I understand this is not a
                    confirmed appointment.
                  </span>
                </label>
                <Error message={errors.consent?.message} />
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-ink/10 pt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((current) => Math.max(current - 1, 0))}
            disabled={step === 0}
            className={cn(step === 0 && "invisible")}
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>

          {step < steps.length - 1 ? (
            <Button type="button" onClick={next}>
              Continue
              <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              <Send className="size-4" />
              Prepare request
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

function Error({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[0.7rem] text-copper-deep">{message}</p>;
}
