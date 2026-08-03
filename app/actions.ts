"use server";

import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { calculateLeadScore, isHighPriorityQuote } from "@/lib/lead-scoring";
import { sendQuoteConfirmationEmail } from "@/lib/resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function mapPreferredContact(value: string): "phone" | "whatsapp" | "email" | null {
  if (value === "Phone call") return "phone";
  if (value === "WhatsApp") return "whatsapp";
  if (value === "Email") return "email";
  return null;
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase.from("contacts").insert({
      name: "Newsletter subscriber",
      email,
      source: "newsletter",
      lead_score: 5,
    });
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
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const leadScore = calculateLeadScore({ phone: data.phone, email: data.email });
    await supabase.from("contacts").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      source: "contact_form",
      notes: data.message,
      lead_score: leadScore,
    });
  }

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
  const highPriority = isHighPriorityQuote({
    budget: data.budget,
    timescale: data.timescale,
  });

  const supabase = getSupabaseAdmin();
  if (supabase) {
    const leadScore = calculateLeadScore({
      budget: data.budget,
      timescale: data.timescale,
      phone: data.phone,
      email: data.email,
    });

    const { data: contact } = await supabase
      .from("contacts")
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        source: "quote_form",
        preferred_contact: mapPreferredContact(data.preferredContact),
        notes: data.notes,
        status: highPriority ? "quoted" : "new",
        budget: data.budget,
        timescale: data.timescale,
        service_required: data.need,
        room_type: data.roomType,
        postcode: data.postcode,
        lead_score: leadScore,
      })
      .select()
      .single();

    await supabase.from("quote_requests").insert({
      contact_id: contact?.id ?? null,
      service_type: data.need
        ? (data.need.toLowerCase() as "flooring" | "blinds" | "both")
        : null,
      room_type: data.roomType,
      budget: data.budget,
      timescale: data.timescale,
      notes: data.notes,
    });
  }

  const resend = getResend();
  if (resend) {
    await resend.emails.send({
      from: "Feeney Flooring & Blinds <quotes@feeneyflooring.co.uk>",
      to: "jessdalydoran@gmail.com",
      subject: `${highPriority ? "[HIGH PRIORITY] " : ""}New quote request from ${data.name}`,
      text: JSON.stringify(data, null, 2),
    });
  }

  await sendQuoteConfirmationEmail(data.email, {
    name: data.name,
    serviceType: data.need
      ? (data.need.toLowerCase() as "flooring" | "blinds" | "both")
      : "both",
    roomType: data.roomType || null,
    budget: data.budget || null,
    timescale: data.timescale || null,
  });

  return { success: true, highPriority };
}
