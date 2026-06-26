import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3-.78.9-2.05 1.59-3.08 1.5-.13-1.1.43-2.27 1.1-3 .76-.83 2.1-1.46 3.1-1.5zM20.5 17.2c-.55 1.27-.82 1.84-1.53 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.02-3.05-1.78-4.04-3.34C-.06 16.9-.36 11.78 1.41 9.06 2.66 7.12 4.64 5.99 6.5 5.99c1.9 0 3.09 1.04 4.66 1.04 1.52 0 2.45-1.04 4.65-1.04 1.66 0 3.42.9 4.67 2.46-4.1 2.25-3.43 8.1.02 8.75z" />
    </svg>
  );
}

/** Calm "Download on the App Store" call to action (custom, on-brand). */
export function AppStoreButton({ className }: { className?: string }) {
  return (
    <a
      href={siteConfig.appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl glass px-5 py-3 transition-all hover:-translate-y-0.5 hover:border-neon/40",
        className,
      )}
    >
      <AppleIcon className="size-7 text-foreground" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] uppercase tracking-wide text-muted">
          Download on the
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}
