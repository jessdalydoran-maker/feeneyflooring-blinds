import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const flooringLinks = [
  { label: "Flooring Overview", href: "/services/flooring" },
  { label: "Engineered Wood", href: "/services/engineered-wood" },
  { label: "LVT", href: "/services/lvt" },
  { label: "Laminate", href: "/services/laminate" },
  { label: "Carpet", href: "/services/carpet" },
  { label: "Stair Fitting", href: "/services/stair-fitting" },
];

const blindsLinks = [
  { label: "Blinds Overview", href: "/services/blinds" },
  { label: "Roller Blinds", href: "/services/roller-blinds" },
  { label: "Venetian Blinds", href: "/services/venetian-blinds" },
  { label: "Vertical Blinds", href: "/services/vertical-blinds" },
  { label: "Roman Blinds", href: "/services/roman-blinds" },
  { label: "Blackout Blinds", href: "/services/blackout-blinds" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold-border bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-cream">
              Feeney <span className="text-gold italic">Flooring</span>{" & Blinds"}
            </p>
            <p className="mt-4 max-w-xs text-sm font-light text-cream-dim">
              Premium flooring and blinds, measured, supplied and fitted
              across Crumlin, Antrim and Belfast.
            </p>
            <div className="mt-6 flex gap-5">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-light"
              >
                Facebook →
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-light"
              >
                Instagram →
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Flooring</p>
            <ul className="space-y-3">
              {flooringLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-cream-dim hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Blinds &amp; More</p>
            <ul className="space-y-3">
              {blindsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-cream-dim hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-sm font-light text-cream-dim hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-light text-cream-dim hover:text-gold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm font-light text-cream-dim">
              <li>
                <a href={BUSINESS.phoneHref} className="hover:text-gold">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>{BUSINESS.addressFull}</li>
            </ul>
            <p className="eyebrow mt-6 mb-3">Opening Hours</p>
            <ul className="space-y-1 text-sm font-light text-cream-dim">
              {BUSINESS.hours
                .filter((h) => h.hours !== "Closed")
                .map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs font-light text-cream-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <p>Registered in Northern Ireland</p>
        </div>
      </div>
    </footer>
  );
}
