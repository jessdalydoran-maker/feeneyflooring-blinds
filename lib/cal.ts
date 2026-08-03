export const CAL_LINKS = {
  showroomVisit: process.env.NEXT_PUBLIC_CAL_SHOWROOM_LINK ?? "",
  homeMeasurement: process.env.NEXT_PUBLIC_CAL_MEASUREMENT_LINK ?? "",
};

export function isCalConfigured() {
  return Boolean(CAL_LINKS.showroomVisit && CAL_LINKS.homeMeasurement);
}

export interface CalWebhookPayload {
  triggerEvent: string;
  payload: {
    uid: string;
    title: string;
    startTime: string;
    endTime: string;
    eventType?: { slug?: string };
    attendees: { name: string; email: string; timeZone?: string }[];
    responses?: {
      name?: { value: string };
      email?: { value: string };
      phone?: { value: string };
      notes?: { value: string };
    };
  };
}

export function bookingTypeFromEventSlug(slug: string | undefined): "showroom_visit" | "home_measurement" {
  if (slug?.includes("measure")) return "home_measurement";
  return "showroom_visit";
}
