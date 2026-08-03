"use server";

import { revalidatePath } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase";
import { sendReviewRequestEmail } from "@/lib/resend";
import { BUSINESS } from "@/lib/constants";

export interface ActionResult {
  success: boolean;
  message?: string;
}

/**
 * Marks a contact's status as "complete". Used by the "Mark job complete"
 * quick action on both the dashboard overview and the contacts table.
 */
export async function markJobComplete(contactId: string): Promise<ActionResult> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { success: false, message: "Supabase is not configured." };
  }

  const { error } = await supabase
    .from("contacts")
    .update({ status: "complete" })
    .eq("id", contactId);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/contacts");
  return { success: true };
}

/**
 * Sends a review-request email to a contact once their job is complete.
 */
export async function sendReviewRequest(contactId: string): Promise<ActionResult> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { success: false, message: "Supabase is not configured." };
  }

  const { data: contact, error } = await supabase
    .from("contacts")
    .select("name, email")
    .eq("id", contactId)
    .single();

  if (error || !contact) {
    return { success: false, message: error?.message ?? "Contact not found." };
  }

  if (!contact.email) {
    return { success: false, message: "This contact has no email address on file." };
  }

  await sendReviewRequestEmail(contact.email, {
    name: contact.name,
    googleReviewUrl: BUSINESS.googleReviewUrl,
    facebookReviewUrl: BUSINESS.facebookReviewUrl,
  });

  await supabase.from("email_log").insert({
    contact_id: contactId,
    email_type: "review_request",
    subject: "How did we do? — Feeney Flooring & Blinds",
    sent_at: new Date().toISOString(),
    status: "sent",
  });

  revalidatePath("/admin/emails");
  return { success: true, message: "Review request sent." };
}

export async function updateContactStatus(
  contactId: string,
  status: string
): Promise<ActionResult> {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return { success: false, message: "Supabase is not configured." };
  }

  const { error } = await supabase
    .from("contacts")
    .update({ status })
    .eq("id", contactId);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/admin/contacts");
  return { success: true };
}
