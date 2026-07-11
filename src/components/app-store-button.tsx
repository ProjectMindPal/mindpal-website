import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.78.9-2.05 1.59-3.08 1.5-.13-1.1.43-2.27 1.1-3 .76-.83 2.1-1.46 3.1-1.5zM20.5 17.2c-.55 1.27-.82 1.84-1.53 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.02-3.05-1.78-4.04-3.34C-.06 16.9-.36 11.78 1.41 9.06 2.66 7.12 4.64 5.99 6.5 5.99c1.9 0 3.09 1.04 4.66 1.04 1.52 0 2.45-1.04 4.65-1.04 1.66 0 3.42.9 4.67 2.46-4.1 2.25-3.43 8.1.02 8.75z" />
    </svg>
  );
}

/** On-brand Google Play mark (brand gradient, not Google's trademark colors). */
function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <defs>
        <linearGradient id="mp-gplay" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5debff" />
          <stop offset="0.55" stopColor="#7af0ff" />
          <stop offset="1" stopColor="#8b4dff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mp-gplay)"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.171l11.04 10.965zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
      />
    </svg>
  );
}

/** Primary "Download on the App Store" call to action (custom, on-brand). */
export function AppStoreButton({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl glass px-5 py-3 transition-all hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-[0_0_34px_-10px_rgba(93,235,255,0.5)] sm:min-w-[210px]",
        className,
      )}
    >
      <AppleIcon className="size-7 shrink-0 text-foreground" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wide text-muted">
          Download on the
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}

/**
 * Android / Google Play — intentional "Coming soon" state.
 * Not a link yet: mirrors the App Store button's shape but reads clearly as
 * not-yet-available via a muted treatment, soft glow, and a "Soon" badge.
 */
export function PlayStoreButton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "store-soon relative inline-flex cursor-default select-none items-center gap-3 rounded-2xl px-5 py-3 sm:min-w-[210px]",
        className,
      )}
    >
      <GooglePlayIcon className="size-7 shrink-0 opacity-80" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wide text-muted/80">
          Coming soon to
        </span>
        <span className="text-base font-semibold text-foreground/90">
          Google Play
        </span>
      </span>
      <span
        aria-hidden
        className="store-soon-badge absolute -right-2 -top-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide"
      >
        <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_2px_rgba(52,229,160,0.55)]" />
        Soon
      </span>
    </div>
  );
}
