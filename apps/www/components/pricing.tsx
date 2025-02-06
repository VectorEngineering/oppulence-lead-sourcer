"use client";

import { AppleLogo, LinuxLogo, WindowsLogo } from "./ui/icons";
import { CONTACT_EMAIL, PRICING_TIERS } from "@/utils/constants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronDown, Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { PricingPageProps, PricingTierProps } from "@/types/pricing";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { CopyInput } from "./ui/copy-input";
import Link from "next/link";
import Spinner from "./ui/spinner";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useCheckout } from "@/hooks/useCheckout";
import { useRouter } from "next/navigation";

interface ExtendedPricingTierProps extends PricingTierProps {
  disabled?: boolean;
}

type VersionInfo = {
  version: string;
  lastReleaseDate: string;
};

const PricingTier: React.FC<ExtendedPricingTierProps> = ({
  title,
  prevPrice,
  price,
  description,
  features,
  buttonText,
  isFree = false,
  priceId,
  user,
  index,
  disabled,
  priceUnit = "/month",
}) => {
  const { handleCheckout, isSubmitting } = useCheckout(user);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string>();
  const router = useRouter();
  const appleContainer = useRef<HTMLDivElement>(null);
  const [appleDownload, setAppleDownload] = useState<
    "darwin-arm64" | "intel-x64"
  >("darwin-arm64");

  // used to ensure animations run after mount client-side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gradientStyle = mounted
    ? {
        backgroundImage:
          "linear-gradient(45deg, #1a237e, #006064, #1b5e20, #006064, #b71c1c)",
        backgroundSize: "300% 300%",
        animation: "rainbow-animation 5s ease infinite",
        color: "white",
        transition: "all 0.3s ease",
      }
    : {};

  const handleDownload = async (os_type: string) => {
    setIsDownloading(true);
    try {
      const res = await fetch(`/api/download?os_type=${os_type}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw Error(res.statusText);
      }

      const download = await res.json();
      if (download?.url) {
        setDownloadLink(download.url);
        router.push(download.url);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  const featureRowDescription = (feature: string) => {
    // if (feature?.startsWith("custom-standard")) {
    //   return (
    //     <div className="flex items-center">
    //       <span>
    //         Monthly refill of Oppulence Credits for market-leading AI models
    //         <PearCreditsTooltip type="standard" />
    //       </span>
    //     </div>
    //   );
    // } else if (feature?.startsWith("free")) {
    //   return (
    //     <div className="flex items-center">
    //       <span>
    //         Use our free trial, your own API key, or local models
    //         <PearCreditsTooltip type="free" />
    //       </span>
    //     </div>
    //   );
    // } else if (feature?.startsWith("custom-enterprise")) {
    //   return (
    //     <div className="flex items-center">
    //       <span>
    //         Monthly refill of increased Oppulence Credits for market-leading AI
    //         models
    //         <PearCreditsTooltip type="enterprise" />
    //       </span>
    //     </div>
    //   );
    // }
    return feature;
  };
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);

  useEffect(() => {
    const fetchVersionInfo = async () => {
      try {
        const response = await fetch("/api/version-info");
        if (!response.ok) {
          throw new Error("Failed to fetch version info");
        }
        const data: VersionInfo = await response.json();
        setVersionInfo(data);
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    fetchVersionInfo();
  }, []);

  return (
    <Card
      className={`flex h-full w-full flex-col ${index === 1 && "from-primary-600/5 ring-primary-900/40 dark:from-primary-600/5 dark:ring-primary-600/20"}`}
    >
      <div className="flex h-full w-full flex-col">
        <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
          <CardTitle className="text-2xl leading-6 text-foreground">
            {title}
            &nbsp;
            {index === 1 && title === "Junior Engineer" && "(Monthly)"}
            {index === 2 && title === "10x Engineer" && "(Yearly)"}
          </CardTitle>
          <p className="text-base font-normal text-gray-600 sm:text-base md:text-sm">
            {index === 0 && isFree && (
              // biome-ignore lint/complexity/noUselessFragments: <explanation>
              <>You can download Oppulence directly 🤓</>
            )}
            {!isFree && description}
          </p>
        </CardHeader>
        <CardContent className="mt-5 flex flex-grow flex-col px-6">
          {!isFree ? (
            <div className="flex flex-col items-start justify-center">
              <p
                className="text-2xl text-gray-900 sm:text-3xl"
                aria-label={`Price: $${price} per month`}
              >
                ${price}
                <small className="text-base text-gray-400 sm:text-lg">
                  {priceUnit}
                </small>
                &nbsp;
                <small className="text-base text-foreground sm:text-lg">
                  &#40;Early Bird&#41;
                </small>
              </p>
              <p
                className="text-base text-gray-400 sm:text-lg"
                aria-label={`Original price: $${prevPrice} per month`}
              >
                <del>${prevPrice}</del>
                <small>{priceUnit}</small>
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-start justify-center">
              <p
                className="text-2xl text-gray-900 sm:text-3xl"
                aria-label="Price: Free"
              >
                Free
              </p>
              <p
                className="sm text-base text-gray-400"
                aria-label="Tagline: Start coding"
              >
                Free requests out of the box, no credit card required.
              </p>
            </div>
          )}
          {features && (
            <ul
              className="mt-5 w-full"
              aria-label={`Features of ${title} plan`}
            >
              {features.map((feature, index) => (
                <li
                  key={`${index}-${feature}-${Math.random()}`}
                  className="flex items-center py-2 text-gray-600"
                >
                  <Check
                    className="mr-3 h-6 w-6 flex-shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  {featureRowDescription(feature)}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          {isFree ? (
            <span>
              Sorry but downloads are temporarily disabled for the week! Please
              check back later. If you have concerns or questions, please
              contact{" "}
              <Link
                href="mailto:engineering@solomon-ai.co"
                className="font-medium text-gray-900 underline"
              >
                engineering@solomon-ai.co
              </Link>
              .
            </span>
          ) : (
            ""
          )}
          {/* {isDownloading ? (
            <Spinner className="mb-4 ml-4 border" />
          ) : (
            isFree &&
            (downloadLink !== undefined ? (
              <p className="text-gray-400">
                Thanks for trying out Oppulence! Your download should have started,
                if it hasn&apos;t, click{" "}
                <a
                  className="transition-colors cursor-pointer text-foreground hover:text-primary-800"
                  href={downloadLink}
                >
                  here
                </a>
                .
              </p>
            ) : (
              <div className="flex flex-col items-center w-full gap-2">
                {versionInfo && (
                  <div className="ml-2 mr-auto text-sm text-gray-500">
                    version {versionInfo?.version}
                    <div>
                      last release{" "}
                      {new Date(
                        versionInfo?.lastReleaseDate,
                      ).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                )}
                <div className="flex w-full max-w-md gap-2">
                  <Button
                    className={cn("rainbow-gradient", "font-bold", "flex-1")}
                    onClick={() => handleDownload("windows")}
                  >
                    <WindowsLogo className="h-[18px] w-[18px] fill-white-main" />
                    Windows
                  </Button>

                  <Button
                    className={cn("rainbow-gradient", "font-bold", "flex-1")}
                    onClick={() =>
                      (window.location.href = "/blog/download-pearai-on-linux")
                    }
                  >
                    <LinuxLogo className="h-[18px] w-[18px] fill-white-main" />
                    Linux x64
                  </Button>
                </div>
                <div className="flex w-full max-w-md">
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        ref={buttonRef}
                        style={gradientStyle}
                        className="relative flex items-center justify-center w-full px-4 py-2 transition-opacity hover:opacity-90"
                      >
                        <div className="flex items-center">
                          <AppleLogo className="mr-2 h-[18px] w-[18px] fill-current" />
                          <span>MacOS</span>
                        </div>
                        <ChevronDown size="20" className="absolute right-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      side="bottom"
                      align="center"
                      style={{
                        width:
                          buttonWidth !== null ? `${buttonWidth}px` : "auto",
                      }}
                      className="flex flex-col items-center justify-center p-1 border border-border/50 bg-background"
                    >
                      <DropdownMenuItem
                        className="flex w-full justify-center rounded px-2 py-1.5 text-sm focus:bg-secondary-300/10"
                        onSelect={() => handleDownload("darwin-arm64")}
                      >
                        Silicon (M chip)
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="flex w-full justify-center rounded px-2 py-1.5 text-sm focus:bg-secondary-300/10"
                        onSelect={() => handleDownload("intel-x64")}
                      >
                        Intel chip
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))
          )} */}
          {!isFree && (
            <>
              {disabled ? (
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    window.location.href = "https://app.oppulence.app/signup";
                  }}
                  aria-label={`Subscribe to ${title} plan`}
                >
                  {buttonText}
                </Button>
              )}
            </>
          )}
          {/* <button className="w-full px-4 py-2 text-sm font-medium rounded-full bg-primary-800 hover:bg-primary-800"> */}
          {/* Get Started */}
          {/* </button> */}
        </CardFooter>
      </div>
    </Card>
  );
};

const PricingPage: React.FC<PricingPageProps> = ({ user }) => {
  return (
    <section
      className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-24"
      aria-labelledby="pricing-heading"
    >
      <div className="absolute top-0 z-[-1] mt-[-35px] h-[140px] w-full bg-primary-800/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-6 lg:space-y-6">
          <header className="mx-auto mt-16 max-w-6xl space-y-4 text-center sm:mt-0 sm:space-y-6">
            <h1
              id="pricing-heading"
              className="mt-8 text-4xl font-medium leading-tight sm:text-5xl md:text-5xl lg:text-5xl"
            >
              🚀 Scale Your Business
              <br />
              With Our Suite of Tools
            </h1>
            <p className="text-lg text-gray-600">
              Choose the perfect combination of tools to supercharge your
              business growth
            </p>
          </header>

          <Tabs
            defaultValue="lead-management"
            className="mt-[20px] flex w-full flex-col items-center"
          >
            <TabsList className="grid h-full grid-cols-4 rounded-full bg-gray-300/20 px-2 py-2 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
              <TabsTrigger
                value="lead-management"
                className="rounded-full bg-background px-4 py-2 text-foreground data-[state=active]:bg-primary-800"
              >
                🎯 Lead Management
              </TabsTrigger>
              <TabsTrigger
                value="financial"
                className="rounded-full bg-background px-4 py-2 text-foreground data-[state=active]:bg-primary-800"
              >
                💰 Financial
              </TabsTrigger>
              <TabsTrigger
                value="prospecting"
                className="rounded-full bg-background px-4 py-2 text-foreground data-[state=active]:bg-primary-800"
              >
                🔍 Prospecting
              </TabsTrigger>
              <TabsTrigger
                value="contract"
                className="rounded-full bg-background px-4 py-2 text-foreground data-[state=active]:bg-primary-800"
              >
                📝 Contracts
              </TabsTrigger>
            </TabsList>

            <div className="mt-[20px] flex w-full items-center justify-center rounded-md bg-gray-300/20 bg-gradient-to-l from-primary-800/[0.15] via-gray-100/10 to-transparent to-60% px-6 py-3.5 ring-1 ring-gray-300/60 dark:bg-gray-100/10 dark:ring-gray-100/40">
              <div className="flex w-full items-center justify-between rounded-md">
                <p className="block w-max items-center justify-start md:flex">
                  <span className="text-foreground dark:text-primary-800">
                    🎁 Bundle & Save: Get 30% off when you combine 3 or more
                    products
                  </span>
                </p>
                <p className="block w-max items-center justify-end text-right md:flex">
                  <strong className="text-lg text-primary-900 dark:text-gray-900">
                    Save up to $897/year
                  </strong>
                  &nbsp;
                  <span className="font-normal text-foreground dark:text-primary-300">
                    with annual billing
                  </span>
                </p>
              </div>
            </div>

            <TabsContent value="lead-management" className="mt-8 w-full">
              <div className="mt-[20px] grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Starter</CardTitle>
                    <p className="text-sm text-gray-600">
                      Perfect for small sales teams getting started with lead
                      management
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$49</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 30% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">Lead Management</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Up to 2,500 leads</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Basic AI lead scoring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Lead capture forms</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Email tracking & notifications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <Badge
                    className="text-white absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm"
                    variant={"outline"}
                  >
                    Most Popular
                  </Badge>
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Professional</CardTitle>
                    <p className="text-sm text-gray-600">
                      For growing teams needing advanced features
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$99</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 30% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Starter, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Unlimited leads</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced AI lead scoring & predictions</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom lead capture forms</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Lead enrichment & company data</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced email tracking & analytics</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <p className="text-sm text-gray-600">
                      Custom solutions for large organizations
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">Custom</p>
                      <p className="text-sm text-gray-500">
                        Contact for pricing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Professional, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom AI model training</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced security features</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Dedicated success manager</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="financial" className="mt-8 w-full">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Essential</CardTitle>
                    <p className="text-sm text-gray-600">
                      Perfect for freelancers and solopreneurs
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$29</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">Core Features</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Income & expense tracking</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Basic financial reports</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Invoice generation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Bank account integration</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Basic tax calculations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <div className="text-white absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm">
                    Most Popular
                  </div>
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Growth</CardTitle>
                    <p className="text-sm text-gray-600">
                      For growing businesses needing advanced features
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$79</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Essential, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced financial reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Recurring invoices</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Multi-currency support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Expense categorization</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Cash flow forecasting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <p className="text-sm text-gray-600">
                      Custom solutions for large organizations
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">Custom</p>
                      <p className="text-sm text-gray-500">
                        Contact for pricing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Growth, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced security features</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Dedicated account manager</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom reporting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="prospecting" className="mt-8 w-full">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Basic</CardTitle>
                    <p className="text-sm text-gray-600">
                      Get started with prospecting
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$39</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">Core Features</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>100 leads/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Basic lead search</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Email verification</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Company information</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <div className="text-white absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm">
                    Most Popular
                  </div>
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Pro</CardTitle>
                    <p className="text-sm text-gray-600">
                      Advanced prospecting features
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$89</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Basic, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>500 leads/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced search filters</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Lead scoring</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Chrome extension</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <p className="text-sm text-gray-600">
                      Custom solutions for large teams
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">Custom</p>
                      <p className="text-sm text-gray-500">
                        Contact for pricing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Pro, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Unlimited leads</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>API access</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Dedicated support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contract" className="mt-8 w-full">
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Starter</CardTitle>
                    <p className="text-sm text-gray-600">
                      Basic contract management
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$19</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">Core Features</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>10 contracts/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Basic templates</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>E-signatures</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Contract storage</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant={"outline"}>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <div className="text-white absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm">
                    Most Popular
                  </div>
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Business</CardTitle>
                    <p className="text-sm text-gray-600">
                      Advanced contract features
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">$49</p>
                      <p className="text-sm text-gray-500">per month</p>
                      <p className="text-secondary mt-2 text-sm">
                        Save 20% with annual billing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Starter, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>50 contracts/month</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom templates</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Contract analytics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Team collaboration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Start Free Trial</Button>
                  </CardFooter>
                </Card>

                <Card className="flex h-full w-full flex-col rounded-2xl border-primary">
                  <CardHeader className="flex-grow-0 px-6 py-6 pb-0">
                    <CardTitle className="text-2xl">Enterprise</CardTitle>
                    <p className="text-sm text-gray-600">
                      Custom contract solutions
                    </p>
                  </CardHeader>
                  <CardContent className="mt-5 flex flex-grow flex-col px-6">
                    <div className="mb-6">
                      <p className="text-3xl font-bold">Custom</p>
                      <p className="text-sm text-gray-500">
                        Contact for pricing
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-2 font-medium">
                          Everything in Business, plus:
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Unlimited contracts</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Advanced workflow automation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Custom integrations</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="text-secondary h-5 w-5" />
                            <span>Dedicated support</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Contact Sales</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center">
            <p className="mt-2 text-sm text-gray-500">
              Questions? Contact our sales team at{" "}
              <Link
                href="mailto:sales@oppulence.app"
                className="text-primary hover:underline"
              >
                sales@oppulence.app
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;

export const PearCreditsTooltip = ({ type }: { type: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pearCreditsCount = useMemo(() => {
    return (type: string) => {
      if (type === "free") {
        return "50";
      }
      if (type === "enterprise") {
        return "1000";
      }
      return "700";
    };
  }, []);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen} delayDuration={50}>
        <TooltipTrigger asChild>
          <Info
            className="mb-0.5 ml-1 inline-flex h-4 w-4 flex-shrink-0 cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p className="max-w-[250px]">
            Current models include Claude 3.5 Sonnet and GPT4o.
            <br /> <br />
            Your Oppulence Credits usage depend on your prompt input and output
            sizes. On average, this equates to around {pearCreditsCount(
              type,
            )}{" "}
            requests{type === "free" && " for our current free trial"}.
            {type !== "free" && (
              <>
                <br /> <br />
                Afraid of running out of credits? You can always contact{" "}
                <a
                  className="cursor-pointer text-foreground transition-colors hover:text-primary-800"
                  // biome-ignore lint/a11y/useValidAnchor: <explanation>
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(CONTACT_EMAIL);
                    toast.success("Email copied to clipboard!");
                  }}
                >
                  Oppulence support
                </a>{" "}
                to top up and keep building!
              </>
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
