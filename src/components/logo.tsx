import Image from "next/image";

import { cn } from "@/lib/utils";

/** MindPAL wordmark — the frosted-glass app icon + brand name. */
export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/mindpal-logo.png"
        alt="MindPAL"
        width={36}
        height={36}
        priority
        className="size-9 rounded-xl"
      />
      {showWord ? (
        <span className="text-base font-semibold tracking-tight">MindPAL</span>
      ) : null}
    </span>
  );
}
