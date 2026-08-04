"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "feeney_admin_session";
const SESSION_VALUE = "authenticated";

export interface AdminLoginState {
  error?: string;
}

export async function adminLogin(
  _prevState: AdminLoginState | undefined,
  formData: FormData
): Promise<AdminLoginState> {
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return {
      error:
        "Admin password not configured yet — set ADMIN_PASSWORD in your environment.",
    };
  }

  const submitted = String(formData.get("password") ?? "");

  if (submitted !== adminPassword) {
    return { error: "Incorrect password." };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  redirect("/admin");
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/admin/login");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}
