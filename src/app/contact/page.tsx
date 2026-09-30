"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { sendEmail } from "@/actions/sendEmail";
import { site } from "@/data/site";

type Fields = { name: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen bg-[#10110f] pb-24 pt-36 text-[#f4f3ed] sm:pb-32 sm:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a2a59b]">Contact / Start a conversation</p>
          <h1 className="mt-9 max-w-5xl text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[1.02] tracking-[-0.065em]">Have something<br />in <span className="text-[#d7fb78]">mind?</span></h1>
        </motion.div>

        <div className="mt-16 grid gap-14 border-t border-white/12 pt-12 lg:mt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pt-16">
          <div>
            <p className="max-w-md text-xl leading-relaxed tracking-tight sm:text-2xl">A product to build. A team to join.<br />A problem worth solving.</p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#a2a59b]">Share a little about what you’re working on and where I can help. {site.availability}.</p>
            <div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#d7fb78]"><span className="h-1.5 w-1.5 rounded-full bg-[#d7fb78]" /> Let’s find a good fit</div>
            <div className="mt-10 border-t border-white/12 pt-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#a2a59b]">Prefer email?</p>
              <a href={`mailto:${site.email}`} className="mt-3 inline-flex max-w-full items-center gap-3 text-base font-medium transition-colors hover:text-[#d7fb78] sm:text-xl"><span className="break-all">{site.email}</span><ArrowUpRight size={19} className="shrink-0" /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#a2a59b]">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[#d7fb78]">LinkedIn <ArrowUpRight size={14} /></a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[#d7fb78]">GitHub <ArrowUpRight size={14} /></a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-[#d7fb78]">WhatsApp <ArrowUpRight size={14} /></a>
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-wider text-[#a2a59b]">{site.location} · EAT / UTC +3</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const updateField = (name: keyof Fields, value: string) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setStatus(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const values = { name: formData.name.trim(), email: formData.email.trim(), message: formData.message.trim() };
    const nextErrors: FieldErrors = {};
    if (values.name.length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (values.message.length < 10) nextErrors.message = "Add a little more detail (at least 10 characters).";
    setErrors(nextErrors);
    setStatus(null);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await sendEmail(values);
      setStatus({ message: result.message, isError: !result.success });
      if (result.success) setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({ message: "Your message couldn’t be sent. Please try again or email me directly.", isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-none border-b border-white/20 bg-transparent px-0 py-4 text-base text-[#f4f3ed] outline-none transition-colors placeholder:text-[#73776d] focus:border-[#d7fb78] disabled:opacity-60 aria-invalid:border-[#f3a89b]";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Contact Elvin" aria-busy={isSubmitting} className="space-y-9">
      <div>
        <label htmlFor="contact-name" className="flex items-center gap-3 text-sm"><span className="font-mono text-[10px] text-[#a2a59b]">01</span> Your name <span className="text-[#a2a59b]" aria-hidden="true">*</span></label>
        <input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={(event) => updateField("name", event.target.value)} required minLength={2} maxLength={100} disabled={isSubmitting} placeholder="What should I call you?" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} className={inputClass} />
        {errors.name && <p id="contact-name-error" role="alert" className="mt-2 text-xs text-[#f3a89b]">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="flex items-center gap-3 text-sm"><span className="font-mono text-[10px] text-[#a2a59b]">02</span> Your email <span className="text-[#a2a59b]" aria-hidden="true">*</span></label>
        <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(event) => updateField("email", event.target.value)} required maxLength={254} disabled={isSubmitting} placeholder="you@company.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} className={inputClass} />
        {errors.email && <p id="contact-email-error" role="alert" className="mt-2 text-xs text-[#f3a89b]">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="flex items-center gap-3 text-sm"><span className="font-mono text-[10px] text-[#a2a59b]">03</span> What are you thinking? <span className="text-[#a2a59b]" aria-hidden="true">*</span></label>
        <textarea id="contact-message" name="message" value={formData.message} onChange={(event) => updateField("message", event.target.value)} required minLength={10} maxLength={5000} disabled={isSubmitting} rows={5} placeholder="Tell me about the project, role, or idea. Context, goals, and timelines are always helpful." aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} className={`${inputClass} resize-y leading-7`} />
        {errors.message && <p id="contact-message-error" role="alert" className="mt-2 text-xs text-[#f3a89b]">{errors.message}</p>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="max-w-[220px] text-xs leading-5 text-[#a2a59b]">A direct line to me.<br />Your message goes to my inbox.</p>
        <button type="submit" disabled={isSubmitting} className="group inline-flex min-h-14 items-center justify-center gap-7 rounded-full bg-[#d7fb78] px-7 py-4 text-sm font-semibold text-[#10110f] transition-colors hover:bg-[#e3ff9c] disabled:cursor-wait disabled:opacity-60">
          {isSubmitting ? <>Sending message <Loader2 size={18} className="animate-spin motion-reduce:animate-none" /></> : <>Send message <ArrowUpRight size={19} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" /></>}
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {status && <div role={status.isError ? "alert" : "status"} className={`flex items-start gap-3 rounded-sm border p-5 text-sm leading-6 ${status.isError ? "border-[#f3a89b]/30 bg-[#f3a89b]/5 text-[#f3a89b]" : "border-[#d7fb78]/30 bg-[#d7fb78]/5 text-[#d7fb78]"}`}>{!status.isError && <Check size={20} className="mt-0.5 shrink-0" />}<p>{status.message}{status.isError && <> <a href={`mailto:${site.email}`} className="underline underline-offset-4">Email me directly.</a></>}</p></div>}
      </div>
    </form>
  );
}
