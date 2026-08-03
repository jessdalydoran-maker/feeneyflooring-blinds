-- Feeney Flooring & Blinds — Supabase schema
-- Run this in the Supabase SQL editor (or via `supabase db push`) once the
-- project exists. Nothing in the app writes real data until
-- NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY /
-- SUPABASE_SERVICE_ROLE_KEY are set in .env.local.

create extension if not exists "pgcrypto";

-- Contacts / CRM
create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  phone text,
  email text,
  source text, -- 'chat', 'quote_form', 'contact_form', 'booking'
  preferred_contact text, -- 'phone', 'whatsapp', 'email'
  notes text,
  status text default 'new', -- 'new', 'contacted', 'quoted', 'booked', 'complete'
  budget text,
  timescale text,
  service_required text,
  room_type text,
  postcode text,
  lead_score integer default 0
);

-- Chat sessions (Flynn)
create table if not exists chat_sessions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  contact_id uuid references contacts(id),
  session_id text unique not null,
  messages jsonb default '[]',
  resolved boolean default false
);

-- Bookings (Cal.com)
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  contact_id uuid references contacts(id),
  booking_type text not null, -- 'showroom_visit', 'home_measurement'
  cal_booking_id text,
  scheduled_at timestamp with time zone,
  status text default 'confirmed', -- 'confirmed', 'cancelled', 'completed'
  notes text
);

-- Quote requests
create table if not exists quote_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  contact_id uuid references contacts(id),
  service_type text, -- 'flooring', 'blinds', 'both'
  flooring_type text,
  blind_type text,
  room_type text,
  room_length numeric,
  room_width numeric,
  room_area numeric,
  supply_fit text, -- 'supply_only', 'supply_and_fit'
  budget text,
  timescale text,
  estimated_price numeric,
  notes text
);

-- Email log
create table if not exists email_log (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  contact_id uuid references contacts(id),
  email_type text, -- 'confirmation', 'follow_up', 'review_request'
  subject text,
  sent_at timestamp with time zone,
  opened_at timestamp with time zone,
  status text default 'sent'
);

create index if not exists contacts_status_idx on contacts (status);
create index if not exists contacts_lead_score_idx on contacts (lead_score desc);
create index if not exists bookings_scheduled_at_idx on bookings (scheduled_at);
create index if not exists quote_requests_contact_id_idx on quote_requests (contact_id);
create index if not exists email_log_contact_id_idx on email_log (contact_id);

-- Row Level Security: locked down by default. The app talks to Supabase
-- using the service-role key from server-only code (API routes / server
-- actions), which bypasses RLS, so no public policies are defined here.
alter table contacts enable row level security;
alter table chat_sessions enable row level security;
alter table bookings enable row level security;
alter table quote_requests enable row level security;
alter table email_log enable row level security;
