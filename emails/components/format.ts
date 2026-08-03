/**
 * Shared date/time formatting for email templates.
 * Renders an ISO date string as e.g. "Thursday 14 August, 2:00pm" (British-style,
 * no year unless it differs from the current year — kept simple, no external date library).
 */
export function formatScheduledAt(iso: string): string {
  const date = new Date(iso);

  const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en-GB", { day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(date);

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const minutesPart = minutes === 0 ? "" : `:${minutes.toString().padStart(2, "0")}`;
  const time = `${hours}${minutesPart}${ampm}`;

  const now = new Date();
  const includeYear = date.getFullYear() !== now.getFullYear();
  const yearPart = includeYear ? `, ${date.getFullYear()}` : "";

  return `${weekday} ${day} ${month}${yearPart}, ${time}`;
}
