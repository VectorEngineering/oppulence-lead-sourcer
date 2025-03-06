import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import AuthButton from "./authbutton";
import DarkModeToggle from "./darkmode-toggle";
import Link from "next/link";
import { List } from "@radix-ui/react-navigation-menu";
import LogoIcon from "../logo-icon";
import MobileMenu from "./mobile-menu";
import PearGreenLogo from "./PearGreen.svg";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const NavItem = ({
  href,
  target = "_self",
  children,
}: {
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  children: ReactNode;
}) => (
  <NavigationMenuLink
    asChild
    className={navigationMenuTriggerStyle()}
    href={href}
    target={target}
  >
    <Link href={href}>{children}</Link>
  </NavigationMenuLink>
);

const DropdownNavItem = ({
  trigger,
  children,
}: {
  trigger: string;
  children: ReactNode;
}) => (
  <NavigationMenuItem>
    <NavigationMenuTrigger>{trigger}</NavigationMenuTrigger>
    <NavigationMenuContent>{children}</NavigationMenuContent>
  </NavigationMenuItem>
);

const ListItem = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary-300/10 hover:text-accent-foreground focus:bg-secondary-300/10 focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 p-3 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-6xl">
        <nav
          // eslint-disable-next-line prettier/prettier
          className="rounded-full border border-border/50 bg-background shadow-md transition-all duration-300 ease-in-out"
          aria-label="Main navigation"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="flex flex-shrink-0 items-center"
                  aria-label="Oppulence Home"
                >
                  {/* <PearGreenLogo /> */}
                  {/* <LogoIcon /> */}
                  <div className="h6 ml-2 font-bold">Oppulence</div>
                </Link>
                <nav className="ml-10 hidden md:block" aria-label="Main menu">
                  <NavigationMenu className="rounded-2xl">
                    <NavigationMenuList className="space-x-1">
                      <DropdownNavItem trigger="⚙️ Products">
                        <ul className="grid w-[400px] gap-4 bg-background p-5 md:w-[550px] md:grid-cols-2 lg:w-[650px] rounded-xl">
                          <ListItem
                            href="https://app.thinkthank.io/signup"
                            title="💰 Financial Management"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground mb-1">Complete financial management solution for your one-person business</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Popular</span>
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">New</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="https://app.oppulence.app/signup"
                            title="🎯 Lead Management"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground mb-1">Convert and manage leads effectively as a one-person business owner</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">AI-powered</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="https://prospector.oppulence.app"
                            title="🔍 Prospecting"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground mb-1">Find and connect with ideal clients for your one-person business</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Pro feature</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/contract-management"
                            title="📝 Contract Management"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground mb-1">Streamline contract workflows for your one-person business</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-600/20">Beta</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="https://docs.oppulence.app"
                            title="🧩 Developers"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30 md:col-span-2"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground mb-1">Access the Oppulence API and documentation</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/20">Documentation</span>
                                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">API</span>
                              </div>
                            </div>
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <DropdownNavItem trigger="📊 Resources">
                        <ul className="grid w-[400px] gap-4 bg-background p-5 md:w-[550px] md:grid-cols-2 lg:w-[650px] rounded-xl">
                          <ListItem
                            href="/about"
                            title="🏢 About"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Learn more about Oppulence</p>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/how-it-works"
                            title="🚀 How It Works"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Learn how Oppulence works</p>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/features"
                            title="✨ Features"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Learn about the features of Oppulence</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Updated</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/benefit"
                            title="🌟 Benefits"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Learn about the benefits of Oppulence</p>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/blog"
                            title="📰 Blog"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Read insights on Oppulence&apos;s development</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">New posts</span>
                              </div>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/faq"
                            title="❓ FAQ"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">Frequently asked questions about Oppulence</p>
                            </div>
                          </ListItem>
                          <ListItem
                            href="/changelog"
                            title="📈 Changelog"
                            className="group relative p-4 hover:bg-muted/60 rounded-lg transition-all duration-200 border border-transparent hover:border-border/30 md:col-span-2"
                          >
                            <div className="space-y-1">
                              <p className="text-sm text-muted-foreground">See what&apos;s new in Oppulence</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">v2.3.0</span>
                                <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20">Latest</span>
                              </div>
                            </div>
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <NavItem href="/roadmap">
                        <div className="flex items-center gap-1.5">
                          <span>🗺️ Roadmap</span>
                          <span className="inline-flex items-center rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">New</span>
                        </div>
                      </NavItem>
                      <NavItem href="/pricing">
                        <div className="flex items-center gap-1.5">
                          <span>💎 Pricing</span>
                          <span className="inline-flex items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Updated</span>
                        </div>
                      </NavItem>

                      {/* <NavItem href="/desktop-download">📥 Download</NavItem> */}
                      {/* <NavItem href="https://solomon-ai.betteruptime.com/">
                        ⚡️ Status{" "}
                      </NavItem> */}
                      {/* <NavItem href="https://engineering-docs.solomon-ai.app/">
                        📖 Documentation
                      </NavItem> */}
                      {/* <NavItem
                        href="https://github.com/SolomonAIEngineering/solomonai/tree/main"
                        target="_blank"
                      >
                        🔗 GitHub
                      </NavItem> */}
                    </NavigationMenuList>
                  </NavigationMenu>
                </nav>
              </div>
              <div className="hidden items-center space-x-4 md:flex">
                <AuthButton />
                <DarkModeToggle />
              </div>
              <div className="md:hidden">
                <MobileMenu user={user} handleSignOut={handleSignOut} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
