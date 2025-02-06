import { getCurrentDatabaseUser } from "@/lib/user-queries/user";
import { redirect } from "next/navigation";
import { cache } from "react";

const getUser = cache(async () => {
  return getCurrentDatabaseUser();
});

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get the user from database with caching
  const user = await getUser();
  // biome-ignore lint/complexity/useOptionalChain: <explanation>
  if (user && user.onboardingComplete) {
    redirect("/portal");
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
