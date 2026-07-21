/** Central site configuration so copy + links live in one place. */
export const siteConfig = {
  name: "MindPAL",
  tagline: "A calmer place to think out loud.",
  description:
    "MindPAL is a private AI emotional companion for reflection, gentle voice conversations, and emotional clarity — calm, premium, and built around your privacy.",
  url: "https://mindpal.app",
  supportEmail: "support@pal.services",
  appStoreUrl:
    "https://apps.apple.com/us/app/mindpal-companion/id6780985653",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
