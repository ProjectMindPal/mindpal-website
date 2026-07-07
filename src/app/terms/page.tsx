import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal-document-page";
import { termsOfService } from "@/lib/legal";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
};

export default function TermsPage() {
  return <LegalDocumentPage document={termsOfService} />;
}
