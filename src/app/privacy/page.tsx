import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal-document-page";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
};

export default function PrivacyPage() {
  return <LegalDocumentPage document={privacyPolicy} />;
}
