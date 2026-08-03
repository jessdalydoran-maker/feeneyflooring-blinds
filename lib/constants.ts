export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://feeneyflooring.co.uk";

export const BUSINESS = {
  name: "Feeney Flooring & Blinds",
  legalName: "Feeney Flooring & Blinds Ltd",
  phone: "07720 981809",
  phoneHref: "tel:+447720981809",
  whatsapp: "https://wa.me/447720981809",
  facebook: "https://www.facebook.com/FeeneyFlooring/",
  address: {
    street: "32-34 Main Street",
    locality: "Crumlin",
    region: "County Antrim",
    postalCode: "BT29 4UP",
    country: "GB",
  },
  addressFull: "32-34 Main Street, Crumlin, BT29 4UP",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday", hours: "Closed" },
    { day: "Thursday", hours: "10am — 8pm" },
    { day: "Friday", hours: "10am — 5pm" },
    { day: "Saturday", hours: "10am — 5pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  rating: {
    value: "5",
    count: "29",
    recommend: "98%",
  },
  // Placeholder review links — replace with the real Google Place review
  // link and Facebook page reviews URL once available.
  googleReviewUrl:
    "https://search.google.com/local/writereview?q=Feeney+Flooring+%26+Blinds+Crumlin",
  facebookReviewUrl: "https://www.facebook.com/FeeneyFlooring/reviews",
};

export const NAV_LINKS = [
  { label: "Flooring", href: "/services/flooring" },
  { label: "Blinds", href: "/services/blinds" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
