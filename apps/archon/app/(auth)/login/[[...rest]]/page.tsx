import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { BusinessConfig } from "@dub/platform-config";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { userId } = await auth();
  if (userId) redirect("/portal");

  return (
    <section className="bg-background/20 fixed left-0 right-0 top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden backdrop-blur-sm">
      <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border p-6 shadow-md md:p-12">
        {/* <Image
          className="mb-8 dark:invert"
          src="/icon.svg"
          alt="logo"
          width={50}
          height={72}
        />
        <p className="text-center text-xl">Welcome to router.so</p>
        <p className="text-center text-muted-foreground">
          Login to access your account.
        </p> */}
        <div className="flex w-full flex-col items-center gap-2">
          <SignIn
            afterSignOutUrl={"/login"}
            signUpUrl="/sign-up"
            signUpFallbackRedirectUrl={"/onboarding"}
            fallbackRedirectUrl={"/onboarding"}
            forceRedirectUrl={"/onboarding"}
          />
        </div>
      </div>
      <p className="text-muted-foreground mb-24 mt-4 max-w-xs text-center text-sm">
        By using {BusinessConfig.name}, you agree to our{" "}
        <a
          className="underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
          href={BusinessConfig.privacyPolicyUrl}
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          className="underline underline-offset-4"
          target="_blank"
          rel="noreferrer"
          href={BusinessConfig.termsAndConditionsUrl}
        >
          Terms of Service
        </a>
        .
      </p>
    </section>
  );
}
