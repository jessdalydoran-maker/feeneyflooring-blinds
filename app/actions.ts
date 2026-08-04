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

/**
 * Sends a plain-text internal notification and logs the outcome. Resend's
 * SDK returns `{ data, error }` rather than throwing on API-level failures
 * (e.g. an unverified sending domain), so this always checks the error
 * field rather than assuming success just because the call didn't throw.
 */
async function sendInternalNotification(params: {
  to: string;
  subject: string;
  text: string;
  contactId?: string | null;
  emailType: "confirmation" | "follow_up" | "review_request";
}) {
  const resend = getResend();
  if (!resend) return;

  const { error } = await resend.emails.send({
    from: "Feeney Flooring & Blinds <enquiries@feeneyflooring.co.uk>",
    to: params.to,
    subject: params.subject,
    text: params.text,
  });

  if (error) {
    console.error(`[Resend] Failed to send "${params.subject}":`, error.message);
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase.from("email_log").insert({
      contact_id: params.contactId ?? null,
      email_type: params.emailType,
      subject: params.subject,
      sent_at: new Date().toISOString(),
      status: error ? "failed" : "sent",
    });
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const supabase = getSupabaseAdmin();
  let contactId: string | null = null;
  if (supabase) {
    const { data: contact } = await supabase
      .from("contacts")
      .insert({
        name: "Newsletter subscriber",
        email,
        source: "newsletter",
        lead_score: 5,
      })
      .select()
      .single();
    contactId = contact?.id ?? null;
  }

  await sendInternalNotification({
    to: "jessdalydoran@gmail.com",
    subject: "New newsletter signup",
    text: `New subscriber: ${email}`,
    contactId,
    emailType: "confirmation",
  });

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
  let contactId: string | null = null;
  if (supabase) {
    const leadScore = calculateLeadScore({ phone: data.phone, email: data.email });
    const { data: contact } = await supabase
      .from("contacts")
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        source: "contact_form",
        notes: data.message,
        lead_score: leadScore,
      })
      .select()
      .single();
    contactId = contact?.id ?? null;
  }

  await sendInternalNotification({
    to: "jessdalydoran@gmail.com",
    subject: `New enquiry from ${data.name}`,
    text: `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`,
    contactId,
    emailType: "confirmation",
  });

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
  let contactId: string | null = null;

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

    contactId = contact?.id ?? null;

    await supabase.from("quote_requests").insert({
      contact_id: contactId,
      service_type: data.need
        ? (data.need.toLowerCase() as "flooring" | "blinds" | "both")
        : null,
      room_type: data.roomType,
      budget: data.budget,
      timescale: data.timescale,
      notes: data.notes,
    });
  }

  await sendInternalNotification({
    to: "jessdalydoran@gmail.com",
    subject: `${highPriority ? "[HIGH PRIORITY] " : ""}New quote request from ${data.name}`,
    text: JSON.stringify(data, null, 2),
    contactId,
    emailType: "confirmation",
  });

  const confirmationResult = await sendQuoteConfirmationEmail(data.email, {
    name: data.name,
    serviceType: data.need
      ? (data.need.toLowerCase() as "flooring" | "blinds" | "both")
      : "both",
    roomType: data.roomType || null,
    budget: data.budget || null,
    timescale: data.timescale || null,
  });

  if (supabase) {
    await supabase.from("email_log").insert({
      contact_id: contactId,
      email_type: "confirmation",
      subject: "We've received your quote request — Feeney Flooring & Blinds",
      sent_at: new Date().toISOString(),
      status: confirmationResult.success ? "sent" : "failed",
    });
  }

  return { success: true, highPriority };
}
