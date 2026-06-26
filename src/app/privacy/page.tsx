import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MindPAL collects, uses, and protects your information — and the choices and rights you have over your data.",
};

const LAST_UPDATED = "June 26, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="px-4 pt-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="mt-10 glass rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {siteConfig.name} (&quot;{siteConfig.name},&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) is built around a simple belief:
            your most personal reflections should stay private. This Privacy
            Policy explains what information we collect, how we use it, and the
            choices you have. By using the {siteConfig.name} app, you agree to
            the practices described here.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect only what we need to provide a calm, reliable experience:</p>
            <Bullets
              items={[
                "Account information: such as your email address when you create an account or sign in.",
                "Content you provide: the messages, reflections, check-ins, and voice input you share with MindPAL while using the app.",
                "Purchase information: records of subscriptions and in-app purchases, processed by the Apple App Store. We do not receive or store your full payment card details.",
                "Device & usage data: limited technical information (such as app version, device type, and diagnostic events) used to keep the app stable and secure.",
              ]}
            />
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <Bullets
              items={[
                "Provide and personalize the core experience — conversations, voice, and reflections.",
                "Maintain your account, preferences, and entitlements (such as MindPAL Plus).",
                "Keep the service secure, prevent abuse, and diagnose technical issues.",
                "Communicate with you about your account, important updates, or support requests.",
              ]}
            />
            <p>
              We do <strong className="text-foreground">not</strong> sell your
              personal information, and we do not use your private conversations
              to show you advertising.
            </p>
          </Section>

          <Section title="3. How We Share Information">
            <p>
              We share information only as needed to operate MindPAL, and only
              with trusted service providers acting on our behalf, including:
            </p>
            <Bullets
              items={[
                "AI and voice providers that process your input to generate responses, under agreements that limit their use of your data to providing the service.",
                "Infrastructure and backend providers that securely host and store data on our behalf.",
                "Payment and distribution providers (such as the Apple App Store) that process purchases.",
              ]}
            />
            <p>
              We may also disclose information if required by law, to protect the
              rights and safety of our users, or in connection with a business
              transfer. We never sell your data to third parties.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We take the protection of your information seriously. Your data is
              encrypted in transit and at rest, and access is restricted to
              authorized systems and personnel. While no method of transmission
              or storage is ever completely secure, we work continually to
              safeguard your information using industry-standard measures.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your information for as long as your account is active or
              as needed to provide the service. When you delete your account, we
              delete or anonymize your associated personal data, except where we
              are required to retain certain records to comply with legal
              obligations.
            </p>
          </Section>

          <Section title="6. Your Rights & Choices">
            <p>
              Depending on where you live, you may have rights over your personal
              data, including the right to:
            </p>
            <Bullets
              items={[
                "Access the personal information we hold about you.",
                "Correct inaccurate or incomplete information.",
                "Delete your account and associated personal data, from within the app or by contacting us.",
                "Object to or restrict certain processing of your information.",
              ]}
            />
            <p>
              To exercise any of these rights, email us at{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-neon hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              MindPAL is not directed to children, and we do not knowingly
              collect personal information from children under the age required
              by applicable law in your region. If you believe a child has
              provided us with personal information, please contact us so we can
              remove it.
            </p>
          </Section>

          <Section title="8. International Users">
            <p>
              MindPAL may be operated from, and your information may be processed
              in, countries other than your own. Where we transfer data
              internationally, we take steps to ensure it remains protected in
              line with this Policy and applicable law.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will update the &quot;Last updated&quot; date
              above and, where appropriate, notify you in the app. Your continued
              use of MindPAL after changes take effect constitutes acceptance of
              the updated Policy.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, please reach out:
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="text-neon hover:underline"
              >
                {siteConfig.supportEmail}
              </a>
            </p>
          </Section>

          <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted/70">
            This page is provided for general informational purposes and does not
            constitute legal advice. Please review it with qualified counsel to
            ensure it meets the requirements that apply to your business.
          </p>
        </div>
      </div>
    </div>
  );
}
