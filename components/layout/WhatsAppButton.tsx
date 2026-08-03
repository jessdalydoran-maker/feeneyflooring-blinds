"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.001 3C8.82 3 3 8.82 3 16.001c0 2.386.63 4.66 1.83 6.67L3 29l6.5-1.79A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.6c-2.1 0-4.15-.57-5.94-1.65l-.43-.25-3.86 1.06 1.03-3.76-.28-.44a10.6 10.6 0 0 1-1.62-5.55c0-5.87 4.78-10.65 10.65-10.65s10.65 4.78 10.65 10.65S21.87 26.6 16 26.6Zm5.85-7.97c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63s1.14 3.05 1.3 3.26c.16.21 2.24 3.42 5.43 4.79.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
