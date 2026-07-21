import { LEGAL_LAST_UPDATED, type LegalDocument } from "@/lib/legal";

function Section({ section }: { section: LegalDocument["sections"][number] }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {section.title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
        {section.paragraphs?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {section.bullets ? (
          <ul className="mt-2 space-y-2">
            {section.bullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neon/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {section.links ? (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {section.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-neon transition-colors hover:text-neon-soft hover:underline"
              >
                {link.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <div className="px-4 pt-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {document.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </div>

        <div className="mt-10 glass rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
            {document.description}
          </p>

          {document.sections.map((section) => (
            <Section key={section.title} section={section} />
          ))}

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
