/** Central site configuration so copy + links live in one place. */
export const siteConfig = {
  name: "MindPAL",
  tagline: "A calmer place to think out loud.",
  description:
    "MindPAL is a private AI emotional companion for reflection, gentle voice conversations, and emotional clarity — calm, premium, and built around your privacy.",
  url: "https://mindpal.app",
  supportEmail: "support@pal.services",
  // Replace with the live App Store URL once the listing is published.
  appStoreUrl: "https://apps.apple.com/app/mindpal",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
] as const;
