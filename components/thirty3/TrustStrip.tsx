const items = [
  "Specialty Coffee",
  "Drive Thru",
  "Sit In",
  "Handmade Traybakes",
  "Fresh Fruit Pots",
  "Brownies",
  "Cookies",
  "Caramel Squares",
  "Nutts Corner",
  "Open 7 Days",
  "Est. 2021",
  "Good Coffee. Good Company.",
];

export function TrustStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-4" style={{ background: "var(--t3-gold)" }}>
      <div className="t3-marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 text-xs font-medium uppercase tracking-[0.15em] text-t3-black font-t3-heading"
          >
            {item} <span>&middot;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
