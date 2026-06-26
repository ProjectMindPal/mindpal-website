"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Logo } from "./logo";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { nav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 sm:px-5">
          <Link href="/" aria-label="MindPAL home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer">
                Get the app
              </a>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl text-muted transition-colors hover:text-foreground sm:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "glass mt-2 overflow-hidden rounded-2xl transition-all sm:hidden",
            open ? "max-h-72 opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0",
          )}
        >
          <nav className="flex flex-col p-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-gradient-to-r from-neon to-violet px-4 py-3 text-center text-sm font-semibold text-[#04101f]"
            >
              Get the app
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
