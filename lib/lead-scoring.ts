export interface LeadScoringInput {
  budget?: string | null;
  timescale?: string | null;
  phone?: string | null;
  email?: string | null;
  hasBooking?: boolean;
}

export const HIGH_PRIORITY_THRESHOLD = 70;

export function calculateLeadScore({
  budget,
  timescale,
  phone,
  email,
  hasBooking,
}: LeadScoringInput): number {
  let score = 0;

  if (budget === "£3,000+") score += 40;
  else if (budget === "£1,500 — £3,000") score += 25;

  if (timescale === "As soon as possible") score += 30;
  else if (timescale === "1 — 3 months") score += 15;

  if (phone) score += 10;
  if (email) score += 5;
  if (hasBooking) score += 20;

  return score;
}

export function isHighPriority(score: number): boolean {
  return score >= HIGH_PRIORITY_THRESHOLD;
}

export function isHighPriorityQuote({
  budget,
  timescale,
}: {
  budget?: string | null;
  timescale?: string | null;
}): boolean {
  const highBudget = budget === "£1,500 — £3,000" || budget === "£3,000+";
  const urgentTimescale = timescale === "As soon as possible";
  return highBudget && urgentTimescale;
}
