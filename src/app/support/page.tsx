import type { Metadata } from "next";
import { Mail, LifeBuoy, Clock } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with MindPAL — contact our team and find answers to common questions about privacy, subscriptions, and your account.",
};

const faqs = [
  {
    q: "What is MindPAL?",
    a: "MindPAL is a private AI emotional companion. It's a calm space to reflect through writing or voice, check in with how you're feeling, and find a little more clarity — any time of day.",
  },
  {
    q: "Is MindPAL a replacement for therapy?",
    a: "No. MindPAL is a supportive space for self-reflection, not a medical or mental-health service, and it isn't a substitute for professional care. If you're in crisis or may be a danger to yourself or others, please contact your local emergency services or a crisis line right away.",
  },
  {
    q: "How is my data protected?",
    a: "Privacy is the foundation of MindPAL. Your conversations are encrypted in transit and at rest, we never sell your data, and there are no ads. You stay in control of your information and can request deletion at any time.",
  },
  {
    q: "How do MindPAL Plus and add-ons work?",
    a: "MindPAL Plus is a monthly subscription that opens up more room each day, billed through your Apple App Store account. You can also buy one-time voice-time and chat packs from the Settings screen. All purchases are handled securely by Apple — we never see your card details.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open the app, go to Settings, and tap “Restore purchases.” Your previous purchases tied to your Apple ID will be restored. If anything looks off, email us and we'll help.",
  },
  {
    q: "How do I manage or cancel my subscription?",
    a: "Subscriptions are managed through your Apple ID: open the iOS Settings app, tap your name, then Subscriptions, and choose MindPAL. From there you can change or cancel your plan. Cancelling stops future renewals while keeping access until the period ends.",
  },
  {
    q: "How do I delete my account and data?",
    a: "You can delete your account and associated data from within the app in Settings, or by emailing us at " + `${siteConfig.supportEmail}.` + " We'll process your request promptly.",
  },
];

export default function SupportPage() {
  return (
    <div className="px-4 pt-20">
      <div className="mx-auto max-w-3xl">
        {/* Intro */}
        <div className="text-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <LifeBuoy className="size-3.5 text-neon" />
            We&apos;re here to help
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Support
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Questions, feedback, or need a hand? We read every message and aim to
            reply with care.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Card>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-neon/20 to-violet/20">
              <Mail className="size-5 text-neon" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">Email us</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              The best way to reach us for anything at all.
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-3 inline-block text-sm font-medium text-neon hover:underline"
            >
              {siteConfig.supportEmail}
            </a>
          </Card>

          <Card>
            <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-neon/20 to-violet/20">
              <Clock className="size-5 text-neon" />
            </div>
            <h2 className="text-lg font-semibold tracking-tight">
              Response time
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We typically reply within 1–2 business days. Thank you for your
              patience — every message reaches a real person.
            </p>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Still need help */}
        <div className="mt-14">
          <div className="glass rounded-3xl px-6 py-8 text-center">
            <h2 className="text-xl font-semibold tracking-tight">
              Still need a hand?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              If you didn&apos;t find what you were looking for, reach out — we&apos;re
              glad to help.
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-6 py-3 text-sm font-semibold text-[#04101f] transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <Mail className="size-4" />
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
