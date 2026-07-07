import type { Metadata } from "next";
import Link from "next/link";

import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your Privacy Choices",
  description:
    "The privacy rights available to you in MindPAL — how to access, correct, delete, and control your personal information, including details for California residents.",
};

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

function Right({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5">{children}</p>
    </div>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyChoicesPage() {
  return (
    <div className="px-4 pt-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Your Privacy Choices
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </div>

        <div className="mt-10 glass rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
            <p>
              At {siteConfig.name}, the conversations you have are deeply
              personal. We built {siteConfig.name} to be a calm, private space —
              and that means giving you clear, meaningful control over your
              information.
            </p>
            <p>
              This page explains the privacy rights available to you, how to use
              them, and what to expect when you do. It is intended for everyone
              who uses {siteConfig.name}, with additional details for residents
              of regions that grant specific legal rights (such as California).
            </p>
            <p>
              {siteConfig.name} processes sensitive personal information, which
              may include your chat messages, voice conversations (audio), saved
              memories, emotional reflections, and purchase history. We encrypt
              sensitive data at rest, and{" "}
              <strong className="text-foreground">
                we do not sell your personal information
              </strong>
              .
            </p>
            <p>
              This page supplements — and should be read together with — our main{" "}
              <Link href="/privacy" className="text-neon hover:underline">
                Privacy Policy
              </Link>
              {" "}and our{" "}
              <Link href="/terms" className="text-neon hover:underline">
                Terms of Service
              </Link>
              , which describe in full what we collect, why, how we protect it,
              and how the service works.
            </p>
          </div>

          <Section title="Your Rights">
            <p>
              Depending on where you live, some or all of the following rights
              may apply to you. Where the law grants these rights, we honor them.
              Where it does not, we still aim to offer reasonable choices wherever
              we can.
            </p>
            <div className="mt-4 space-y-5">
              <Right title="Right to Know / Access Your Personal Information">
                You can ask us to confirm whether we process your personal
                information and to provide a copy of the specific information we
                hold about you, along with details such as the categories of
                data, the sources, the purposes for processing, and the
                categories of third parties with whom it may be shared.
              </Right>
              <Right title="Right to Deletion">
                You can request deletion of your account and the personal
                information associated with it. Once your request is verified, we
                will delete or de‑identify your information, except where we are
                permitted or required to retain it (see Limitations and
                Exceptions below).
              </Right>
              <Right title="Right to Correction">
                If any personal information we hold about you is inaccurate, you
                can ask us to correct it. We may ask you to provide details that
                help us confirm the accurate information.
              </Right>
              <Right title="Right to Data Portability">
                You can request a copy of certain personal information you have
                provided to us in a portable, readable format, so that you can
                keep it or move it to another service where technically feasible.
              </Right>
              <Right title="Right to Opt‑Out of the Sale or Sharing of Personal Information">
                You have the right to opt out of the “sale” or “sharing” of your
                personal information. {siteConfig.name} does not sell your
                personal information, and we do not share it for cross‑context
                behavioral advertising. Because we do not engage in these
                activities, there is nothing for you to opt out of — but we
                describe how we honor opt‑out signals below.
              </Right>
              <Right title="Right to Limit the Use and Disclosure of Sensitive Personal Information">
                You have the right to limit our use of your sensitive personal
                information to what is necessary to provide {siteConfig.name} and
                to operate it safely and reliably. We already restrict our use of
                sensitive information to these purposes and do not use it to infer
                characteristics about you for advertising.
              </Right>
              <Right title="Right to Non‑Discrimination">
                We will never discriminate against you for exercising any of these
                rights. You will receive the same quality of service, and we will
                not deny you access, charge you a different price, or provide a
                lesser experience because you made a privacy request.
              </Right>
            </div>
          </Section>

          <Section title="How to Exercise Your Rights">
            <p>You can submit a privacy request in either of these ways:</p>
            <Bullets
              items={[
                <>
                  <strong className="text-foreground">In the app:</strong> Open{" "}
                  {siteConfig.name}, go to Settings, and use the available account
                  and data controls (including account deletion).
                </>,
                <>
                  <strong className="text-foreground">By email:</strong> Contact
                  us at{" "}
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-neon hover:underline"
                  >
                    {siteConfig.supportEmail}
                  </a>{" "}
                  with the subject line “Privacy Request,” and let us know which
                  right you would like to exercise.
                </>,
              ]}
            />
            <p>To help us respond quickly, please include:</p>
            <Bullets
              items={[
                "The right you wish to exercise (for example, access, deletion, or correction).",
                "The email address or account associated with your MindPAL profile.",
                "Any details that help us locate your information.",
              ]}
            />
            <p>
              You may also use an authorized agent to submit a request on your
              behalf where the law allows. We may ask the agent to provide proof
              of authorization and may still ask you to verify your identity
              directly.
            </p>
            <p>
              We will respond to verified requests within the time periods
              required by applicable law. If we need more time, we will let you
              know within the required timeframe and explain why.
            </p>
          </Section>

          <Section title="California Residents (CCPA/CPRA)">
            <p>
              If you are a California resident, the California Consumer Privacy
              Act, as amended by the California Privacy Rights Act (collectively,
              the “CCPA”), provides you with the rights described above, including
              the rights to know, delete, correct, opt out of sale/sharing, limit
              the use of sensitive personal information, and not be discriminated
              against.
            </p>
            <p>Additional details for California residents:</p>
            <Bullets
              items={[
                <>
                  <strong className="text-foreground">No sale or sharing.</strong>{" "}
                  In the preceding 12 months, we have not sold personal
                  information and have not shared it for cross‑context behavioral
                  advertising. We do not sell or share the personal information of
                  any user, including individuals we know to be under 16.
                </>,
                <>
                  <strong className="text-foreground">
                    Sensitive personal information.
                  </strong>{" "}
                  We use sensitive personal information only to provide and secure{" "}
                  {siteConfig.name} — not to infer characteristics about you, and
                  not for advertising.
                </>,
                <>
                  <strong className="text-foreground">
                    No financial incentives.
                  </strong>{" "}
                  We do not offer financial incentives or price differences in
                  exchange for your personal information.
                </>,
                <>
                  <strong className="text-foreground">Authorized agents.</strong>{" "}
                  You may designate an authorized agent to make a request on your
                  behalf, subject to verification.
                </>,
                <>
                  <strong className="text-foreground">
                    Global Privacy Control.
                  </strong>{" "}
                  Where required, we honor recognized opt‑out preference signals,
                  such as the Global Privacy Control (GPC), as a valid request to
                  opt out of sale/sharing for the browser or device sending the
                  signal.
                </>,
              ]}
            />
            <p>
              You may exercise your California rights using the methods described
              in How to Exercise Your Rights above. We will not discriminate
              against you for doing so.
            </p>
          </Section>

          <Section title="Do Not Sell or Share My Personal Information">
            <p>
              We want to be direct: {siteConfig.name} does not sell your personal
              information for money or other valuable consideration, and we do not
              share it for cross‑context behavioral advertising.
            </p>
            <p>
              Because we do not engage in these practices, no opt‑out is necessary
              to stop them. Even so:
            </p>
            <Bullets
              items={[
                "If your browser or device sends a recognized opt‑out preference signal (such as GPC), we treat it as a request to opt out of sale/sharing where applicable.",
                <>
                  If you have any questions about how your information is used, you
                  can contact us at{" "}
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-neon hover:underline"
                  >
                    {siteConfig.supportEmail}
                  </a>{" "}
                  at any time.
                </>,
              ]}
            />
          </Section>

          <Section title="Verification of Requests">
            <p>
              To protect your privacy and security, we may need to verify your
              identity before we act on certain requests — particularly requests
              to access, correct, delete, or receive a copy of your information.
            </p>
            <Bullets
              items={[
                "Verification usually involves confirming control of the account or email address associated with your MindPAL profile, and may require additional information that matches what we already hold.",
                "We will only use information provided for verification to confirm your identity and to process your request.",
                "If we are unable to verify your identity to the standard required by law, we may be unable to fulfill the request, and we will explain why.",
              ]}
            />
            <p>
              We are required to take these steps to prevent unauthorized access
              to sensitive personal information.
            </p>
          </Section>

          <Section title="Limitations and Exceptions">
            <p>
              We honor privacy rights to the fullest extent the law requires.
              However, the law also recognizes that we cannot always delete or
              restrict every piece of information in every circumstance. As a
              result:
            </p>
            <Bullets
              items={[
                "We may retain certain information after a deletion request where retention is permitted or required — for example, to comply with legal or regulatory obligations, to detect and prevent fraud or security incidents, to resolve disputes or enforce our agreements, to complete a transaction you requested, or for other legitimate internal purposes compatible with the context in which the information was provided.",
                "We may retain de‑identified or aggregated information that can no longer reasonably be linked to you.",
                "Some records related to purchases and billing are handled by the app store or payment provider and are subject to their own retention practices.",
                "We may decline or limit a request that is not verifiable, that is manifestly unfounded or excessive, or where an exception under applicable law applies. If we cannot fully honor a request, we will tell you the reason.",
              ]}
            />
            <p>
              These limitations exist to meet our legal obligations and to keep{" "}
              {siteConfig.name} safe and reliable. They are not used to avoid
              honoring valid requests.
            </p>
          </Section>

          <Section title="Changes to This Page">
            <p>
              We may update this page from time to time to reflect changes in our
              practices, technology, or applicable law. When we make material
              changes, we will update the “Last updated” date above and, where
              appropriate, provide additional notice. Your continued use of{" "}
              {siteConfig.name} after an update takes effect means you accept the
              revised page.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about your privacy choices, would like to
              exercise a right, or need help with a request, please reach out:
            </p>
            <Bullets
              items={[
                <>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.supportEmail}`}
                    className="text-neon hover:underline"
                  >
                    {siteConfig.supportEmail}
                  </a>
                </>,
                <>
                  <strong className="text-foreground">Related:</strong>{" "}
                  <Link href="/privacy" className="text-neon hover:underline">
                    Privacy Policy
                  </Link>
                  {" "}and{" "}
                  <Link href="/terms" className="text-neon hover:underline">
                    Terms of Service
                  </Link>
                </>,
              ]}
            />
            <p>We read every message and aim to respond with care.</p>
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
