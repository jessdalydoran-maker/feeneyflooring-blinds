import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface Contact {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  source: "chat" | "quote_form" | "contact_form" | "booking" | null;
  preferred_contact: "phone" | "whatsapp" | "email" | null;
  notes: string | null;
  status: "new" | "contacted" | "quoted" | "booked" | "complete";
  budget: string | null;
  timescale: string | null;
  service_required: string | null;
  room_type: string | null;
  postcode: string | null;
  lead_score: number;
}

export interface ChatSession {
  id: string;
  created_at: string;
  contact_id: string | null;
  session_id: string;
  messages: { role: "user" | "assistant"; content: string }[];
  resolved: boolean;
}

export interface Booking {
  id: string;
  created_at: string;
  contact_id: string | null;
  booking_type: "showroom_visit" | "home_measurement";
  cal_booking_id: string | null;
  scheduled_at: string | null;
  status: "confirmed" | "cancelled" | "completed";
  notes: string | null;
}

export interface QuoteRequest {
  id: string;
  created_at: string;
  contact_id: string | null;
  service_type: "flooring" | "blinds" | "both" | null;
  flooring_type: string | null;
  blind_type: string | null;
  room_type: string | null;
  room_length: number | null;
  room_width: number | null;
  room_area: number | null;
  supply_fit: "supply_only" | "supply_and_fit" | null;
  budget: string | null;
  timescale: string | null;
  estimated_price: number | null;
  notes: string | null;
}

export interface EmailLog {
  id: string;
  created_at: string;
  contact_id: string | null;
  email_type: "confirmation" | "follow_up" | "review_request";
  subject: string;
  sent_at: string | null;
  opened_at: string | null;
  status: string;
}

let cachedAdminClient: SupabaseClient | null | undefined;

/**
 * Server-only client using the service-role key (bypasses RLS).
 * Returns null when Supabase hasn't been configured yet — callers should
 * no-op gracefully rather than throw, so the site fully works before a
 * Supabase project exists.
 *
 * Deliberately untyped against a generated Database schema (there isn't a
 * live project to generate one from yet) — callers cast `.from(table)`
 * rows against the interfaces above.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (cachedAdminClient !== undefined) return cachedAdminClient;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    cachedAdminClient = null;
    return null;
  }

  cachedAdminClient = createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
  return cachedAdminClient;
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseAdmin() !== null;
}
