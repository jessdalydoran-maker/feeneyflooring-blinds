"use client";

import { useActionState } from "react";
import { adminLogin, AdminLoginState } from "@/app/(site)/admin/actions";

const initialState: AdminLoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(
    adminLogin,
    initialState
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-near-black px-6">
      <div className="w-full max-w-sm border border-gold-border bg-panel rounded-3xl p-10">
        <p className="eyebrow mb-2 text-center">Feeney Flooring &amp; Blinds</p>
        <h1 className="font-display text-3xl text-cream text-center mb-8">
          Admin Login
        </h1>

        <form action={formAction} className="space-y-5">
          <div>
            <label
              htmlFor="password"
              className="block text-[11px] uppercase tracking-[0.2em] text-cream-dim mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full border border-gold-border bg-panel-2 px-4 py-3 text-cream placeholder:text-cream-muted focus:border-gold focus:outline-none rounded-xl font-light"
            />
          </div>

          {state?.error ? (
            <p className="text-sm text-red-400">{state.error}</p>
          ) : null}

          <button
            type="submit"
            disabled={pending}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 rounded-xl bg-gold text-near-black hover:bg-gold-light border border-gold disabled:opacity-60"
          >
            {pending ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
