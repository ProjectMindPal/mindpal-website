import Link from "next/link";
import {
  MessageCircle,
  AudioLines,
  Sparkles,
  ShieldCheck,
  Lock,
  EyeOff,
  HeartHandshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AppStoreButton } from "@/components/app-store-button";
import { siteConfig } from "@/lib/site";

const features = [
  {
    icon: MessageCircle,
    title: "Thoughtful conversations",
    description:
      "Talk through what's on your mind with an AI that listens carefully, reflects gently, and never rushes you.",
  },
  {
    icon: AudioLines,
    title: "Private voice calls",
    description:
      "When typing feels like too much, simply talk. Warm, natural voice conversations whenever you need them.",
  },
  {
    icon: Sparkles,
    title: "Emotional clarity",
    description:
      "Move from a tangle of feelings to a clearer view — gentle check-ins and reflections that help things settle.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    description:
      "Your conversations are encrypted in transit and at rest. We never sell your data — your reflections stay yours.",
  },
];

const privacyPoints = [
  { icon: Lock, label: "Encrypted in transit & at rest" },
  { icon: EyeOff, label: "No ads, ever" },
  { icon: HeartHandshake, label: "We never sell your data" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 animate-float rounded-full bg-neon/15 blur-[120px]"
        />
        <div className="mx-auto max-w-4xl text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_2px_rgba(52,229,160,0.6)]" />
            Private AI emotional companion
          </span>

          <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            A calmer place to{" "}
            <span className="text-gradient">think out loud.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            MindPAL is a private space for reflection, gentle voice
            conversations, and emotional clarity — designed to feel calm,
            premium, and entirely yours.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <AppStoreButton />
            <Button asChild variant="outline" size="lg">
              <Link href="#features">Explore features</Link>
            </Button>
          </div>

          <p className="mt-5 text-xs text-muted/80">
            No ads · No data selling · Private by design
          </p>
        </div>

        {/* Soft glass “device” panel */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="glass glow-ring rounded-[2rem] p-2">
            <div className="rounded-[1.6rem] bg-[#070b18]/80 p-6 sm:p-10">
              <div className="flex flex-col gap-4">
                <div className="self-start glass-soft max-w-[80%] rounded-2xl rounded-bl-md px-4 py-3 text-sm text-muted">
                  I&apos;ve been feeling overwhelmed lately and I&apos;m not sure
                  why.
                </div>
                <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-br from-neon/20 to-violet/20 px-4 py-3 text-sm">
                  That sounds heavy. Let&apos;s slow down together — what part of
                  today felt heaviest?
                </div>
                <div className="self-start glass-soft max-w-[60%] rounded-2xl rounded-bl-md px-4 py-3 text-sm text-muted">
                  Honestly… the quiet after everyone left.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MindPAL */}
      <section className="px-4 pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            A companion for the quiet moments
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted">
            Some thoughts are easier to untangle out loud. MindPAL gives you a
            calm, judgment-free place to reflect — through writing or voice —
            with an AI companion that meets you where you are. It&apos;s not a
            replacement for professional care; it&apos;s a gentle space to check
            in with yourself, any time of day.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-4 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Everything stays calm, and private
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Thoughtfully built features that respect your attention and your
              privacy.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:border-neon/30">
                <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-neon/20 to-violet/20">
                  <feature.icon className="size-5 text-neon" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy band */}
      <section className="px-4 pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="glass rounded-3xl px-6 py-10 text-center sm:px-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Your reflections belong to you
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Privacy isn&apos;t a feature we added — it&apos;s the foundation.
              MindPAL is built so your most personal thoughts stay protected and
              never become a product.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {privacyPoints.map((point) => (
                <span
                  key={point.label}
                  className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted"
                >
                  <point.icon className="size-4 text-mint" />
                  {point.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Find a little more calm,
            <br className="hidden sm:block" /> starting today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            Download MindPAL and give yourself a quiet, private place to think.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButton />
          </div>
          <p className="mt-6 text-sm text-muted/80">
            Questions first?{" "}
            <Link href="/support" className="text-neon hover:underline">
              Visit Support
            </Link>{" "}
            or email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-neon hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
