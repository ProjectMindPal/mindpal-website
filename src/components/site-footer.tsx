import Link from "next/link";

import { Logo } from "./logo";
import { nav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl px-6 py-8 sm:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                Pages
              </span>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/privacy-choices"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Privacy Choices
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                Contact
              </span>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-sm text-muted transition-colors hover:text-neon"
              >
                {siteConfig.supportEmail}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </span>
            <span>Made with care for calm, private reflection.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
