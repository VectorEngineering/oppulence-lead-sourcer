import { Suspense } from "react";
import OnboardingPageClient from "./page-client";

export const dynamic = "force-dynamic";

export default function OnboardingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OnboardingPageClient />
    </Suspense>
  );
}
