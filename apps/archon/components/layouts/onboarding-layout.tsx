"use client";

import { ArrowLeft, Briefcase, Rocket, UserCircle, Users } from "lucide-react";

import Link from "next/link";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

export function OnboardingLayout({
  children,
  currentStep,
}: OnboardingLayoutProps) {
  const steps = [
    {
      icon: <UserCircle className="h-5 w-5" />,
      title: "Your details",
      subtitle: "Provide an email and password",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Workspace",
      subtitle: "Create your workspace",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Invite your team",
      subtitle: "Start collaborating with your team",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Welcome to Untitled!",
      subtitle: "Get up and running in 3 minutes",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        {/* Left Panel */}
        <div className="relative w-[300px] border-r border-gray-200 p-6">
          <div className="mb-12">
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#000" />
              <path d="M8 8H24V24H8V8Z" fill="#fff" />
            </svg>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex gap-3 ${
                  currentStep === index ? "opacity-100" : "opacity-60"
                }`}
              >
                <div className="mt-1">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-6 flex w-full items-center justify-between pr-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
            <Link
              href="/sign-in"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 p-6">
          <div className="mx-auto max-w-md pt-12">
            {children}

            <div className="mt-8 flex justify-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={`step-${index}-${Date.now()}`}
                  className={`h-1 w-16 rounded-full ${
                    index === currentStep
                      ? "bg-primary text-secondary"
                      : "bg-gray-200 text-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
