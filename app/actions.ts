"use server";

import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const resend = getResend();
  if (resend) {
    await resend.emails.send({
      from: "Feeney Flooring & Blinds <updates@feeneyflooring.co.uk>",
      to: "jessdalydoran@gmail.com",
      subject: "New newsletter signup",
      text: `New subscriber: ${email}`,
    });
  }

  return { success: true, message: "Thanks — you're on the list." };
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  const resend = getResend();
  if (resend) {
    await resend.emails.send({
      from: "Feeney Flooring & Blinds <enquiries@feeneyflooring.co.uk>",
      to: "jessdalydoran@gmail.com",
      subject: `New enquiry from ${data.name}`,
      text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
    });
  }
  return { success: true };
}

export interface QuoteFormData {
  need: string;
  roomType: string;
  numberOfRooms: string;
  postcode: string;
  budget: string;
  timescale: string;
  name: string;
  phone: string;
  email: string;
  preferredContact: string;
  notes: string;
}

export async function submitQuoteForm(data: QuoteFormData) {
  const highPriority =
    (data.budget === "£1,500 — £3,000" || data.budget === "£3,000+") &&
    data.timescale === "As soon as possible";

  const resend = getResend();
  if (resend) {
    await resend.emails.send({
      from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
      to: "jessdalydoran@gmail.com",
      subject: `${highPriority ? "[HIGH PRIORITY] " : ""}New quote request from ${data.name}`,
      text: JSON.stringify(data, null, 2),
    });
    await resend.emails.send({
      from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
      to: data.email,
      subject: "We've received your quote request",
      text: `Hi ${data.name},\n\nThanks for getting in touch with Feeney Flooring & Blinds. We'll be in touch within 2 hours during opening hours.\n\nKevin`,
    });
  }

  return { success: true, highPriority };
}
