import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * MindPAL lockup — the frosted-glass "P" app icon beside a refined gradient
 * wordmark. The icon is a square glass image; its corners are rounded with a
 * real CSS radius (iOS-style) plus a crisp inner ring, soft depth shadow and
 * gentle neon bloom, so the edges stay mathematically clean at any size.
 *
 * - `showWord`  render the "MindPAL" wordmark next to the mark (default on)
 * - `size`      pixel size of the app icon (wordmark scales with it)
 */
export function Logo({
  className,
  showWord = true,
  size = 48,
}: {
  className?: string;
  showWord?: boolean;
  size?: number;
}) {
  return (
    <span
      className={cn(
        "logo inline-flex select-none items-center gap-3",
        className,
      )}
    >
      <span
        className="logo-mark relative block shrink-0 overflow-hidden"
        style={{ width: size, height: size, borderRadius: size * 0.235 }}
      >
        <Image
          src="/mindpal-logo.png"
          alt={showWord ? "" : "MindPAL"}
          width={size}
          height={size}
          priority
          className="block size-full object-cover"
        />
        <span aria-hidden className="logo-ring" />
      </span>
      {showWord ? (
        <span
          className="logo-word font-semibold leading-none"
          style={{ fontSize: Math.round(size * 0.44) }}
        >
          MindPAL
        </span>
      ) : null}
    </span>
  );
}
