"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitContactForm, type ContactFormData } from "@/app/actions";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData & { gdpr: boolean }>();
  const [done, setDone] = useState(false);

  async function onSubmit(data: ContactFormData & { gdpr: boolean }) {
    await submitContactForm(data);
    setDone(true);
    reset();
  }

  if (done) {
    return (
      <div className="border border-gold-border bg-panel p-8 rounded-[2px]">
        <p className="font-display text-2xl text-gold">Thank you.</p>
        <p className="mt-3 text-sm font-light text-cream-dim">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Input placeholder="Name" {...register("name", { required: true })} />
        {errors.name && <p className="mt-1 text-xs text-gold">Please enter your name.</p>}
      </div>
      <div>
        <Input placeholder="Phone" {...register("phone", { required: true })} />
        {errors.phone && <p className="mt-1 text-xs text-gold">Please enter your phone number.</p>}
      </div>
      <div>
        <Input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <p className="mt-1 text-xs text-gold">Please enter your email address.</p>}
      </div>
      <div>
        <Textarea placeholder="Message" {...register("message", { required: true })} />
        {errors.message && <p className="mt-1 text-xs text-gold">Please tell us about your project.</p>}
      </div>
      <label className="flex items-start gap-3 text-xs font-light text-cream-muted">
        <input type="checkbox" className="mt-0.5" {...register("gdpr", { required: true })} />
        I agree to Feeney Flooring &amp; Blinds contacting me about my enquiry.
      </label>
      {errors.gdpr && <p className="text-xs text-gold">Please confirm you&apos;re happy for us to contact you.</p>}
      <Button variant="primary" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
