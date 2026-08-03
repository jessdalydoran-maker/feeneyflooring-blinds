"use client";

import { useState } from "react";
import { submitQuoteForm, type QuoteFormData } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

const TOTAL_STEPS = 6;

const needOptions = ["Flooring", "Blinds", "Both"];
const roomOptions = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Hallway",
  "Stairs",
  "Whole House",
  "Commercial",
];
const budgetOptions = [
  "Under £500",
  "£500 — £1,500",
  "£1,500 — £3,000",
  "£3,000+",
  "Not sure yet",
];
const timescaleOptions = [
  "As soon as possible",
  "1 — 3 months",
  "3 — 6 months",
  "Just planning ahead",
];
const contactOptions = ["Phone call", "WhatsApp", "Email"];

type FormState = Omit<QuoteFormData, "roomType"> & { roomType: string };

const initialState: FormState = {
  need: "",
  roomType: "",
  numberOfRooms: "",
  postcode: "",
  budget: "",
  timescale: "",
  name: "",
  phone: "",
  email: "",
  preferredContact: "",
  notes: "",
};

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance() {
    switch (step) {
      case 1:
        return form.need !== "";
      case 2:
        return form.roomType !== "" && form.numberOfRooms !== "";
      case 3:
        return form.postcode.trim() !== "";
      case 4:
        return form.budget !== "";
      case 5:
        return form.timescale !== "";
      default:
        return true;
    }
  }

  function next() {
    if (!canAdvance()) {
      setError("Please complete this step before continuing.");
      return;
    }
    setError("");
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function back() {
    setError("");
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    if (!form.name || !form.phone || !form.email || !form.preferredContact) {
      setError("Please fill in your name, phone, email and preferred contact method.");
      return;
    }
    if (!consent) {
      setError("Please confirm you're happy for us to contact you.");
      return;
    }
    setError("");
    setSubmitting(true);
    await submitQuoteForm(form);
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="border border-gold-border bg-panel p-10 text-center rounded-[2px]">
        <p className="font-display text-3xl italic text-gold">Thank you, {form.name.split(" ")[0]}.</p>
        <p className="mt-4 text-base font-light leading-[1.85] text-cream-dim">
          Your quote request has been received. A confirmation email is on
          its way, and we&apos;ll be in touch within 2 hours during opening
          hours to talk through your project.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10 flex items-center gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-[2px] transition-colors duration-300 ${
              i < step ? "bg-gold" : "bg-gold-border"
            }`}
          />
        ))}
      </div>
      <p className="eyebrow mb-6">
        Step {step} of {TOTAL_STEPS}
      </p>

      {step === 1 && (
        <div>
          <h2 className="font-display text-3xl text-cream">What do you need?</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {needOptions.map((option) => (
              <button
                key={option}
                onClick={() => update("need", option)}
                className={`border px-6 py-5 text-sm font-light transition-colors rounded-[2px] ${
                  form.need === option
                    ? "border-gold bg-gold-subtle text-cream"
                    : "border-gold-border text-cream-dim hover:border-gold"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="font-display text-3xl text-cream">Tell us about your project.</h2>
          <div className="mt-6 space-y-4">
            <Select
              value={form.roomType}
              onChange={(e) => update("roomType", e.target.value)}
            >
              <option value="">Select room type…</option>
              {roomOptions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </Select>
            <Input
              type="number"
              min={1}
              placeholder="Number of rooms"
              value={form.numberOfRooms}
              onChange={(e) => update("numberOfRooms", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="font-display text-3xl text-cream">Your location.</h2>
          <p className="mt-2 text-sm font-light text-cream-dim">
            We just need your postcode to confirm we cover your area.
          </p>
          <div className="mt-6">
            <Input
              placeholder="Postcode"
              value={form.postcode}
              onChange={(e) => update("postcode", e.target.value)}
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="font-display text-3xl text-cream">Your budget.</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {budgetOptions.map((option) => (
              <button
                key={option}
                onClick={() => update("budget", option)}
                className={`border px-6 py-5 text-sm font-light transition-colors rounded-[2px] ${
                  form.budget === option
                    ? "border-gold bg-gold-subtle text-cream"
                    : "border-gold-border text-cream-dim hover:border-gold"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2 className="font-display text-3xl text-cream">Your timescale.</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {timescaleOptions.map((option) => (
              <button
                key={option}
                onClick={() => update("timescale", option)}
                className={`border px-6 py-5 text-sm font-light transition-colors rounded-[2px] ${
                  form.timescale === option
                    ? "border-gold bg-gold-subtle text-cream"
                    : "border-gold-border text-cream-dim hover:border-gold"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 6 && (
        <div>
          <h2 className="font-display text-3xl text-cream">Your details.</h2>
          <div className="mt-6 space-y-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <Input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <Select
              value={form.preferredContact}
              onChange={(e) => update("preferredContact", e.target.value)}
            >
              <option value="">Preferred contact method…</option>
              {contactOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
            <Textarea
              placeholder="Any additional notes"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
            />
            <label className="flex items-start gap-3 text-xs font-light text-cream-muted">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5"
              />
              I agree to Feeney Flooring &amp; Blinds contacting me about my
              quote request.
            </label>
          </div>
        </div>
      )}

      {error && <p className="mt-4 text-sm text-gold">{error}</p>}

      <div className="mt-10 flex justify-between">
        <Button variant="secondary" onClick={back} disabled={step === 1}>
          Back
        </Button>
        {step < TOTAL_STEPS ? (
          <Button variant="primary" onClick={next}>
            Continue
          </Button>
        ) : (
          <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Submitting…" : "Get My Quote"}
          </Button>
        )}
      </div>
    </div>
  );
}
