"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "feeney-cookie-consent";
const CHANGE_EVENT = "feeney-cookie-consent-changed";

export function notifyCookieConsentChanged() {
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useCookieBannerVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(!localStorage.getItem(STORAGE_KEY));
    check();
    window.addEventListener(CHANGE_EVENT, check);
    return () => window.removeEventListener(CHANGE_EVENT, check);
  }, []);

  return visible;
}
