"use server";

import {
  updateContactStatus as _updateContactStatus,
  markJobComplete as _markJobComplete,
  sendReviewRequest as _sendReviewRequest,
  ActionResult,
} from "@/app/admin/lib/actions";

export async function updateContactStatus(
  contactId: string,
  status: string
): Promise<ActionResult> {
  return _updateContactStatus(contactId, status);
}

export async function markJobComplete(contactId: string): Promise<ActionResult> {
  return _markJobComplete(contactId);
}

export async function sendReviewRequest(contactId: string): Promise<ActionResult> {
  return _sendReviewRequest(contactId);
}
