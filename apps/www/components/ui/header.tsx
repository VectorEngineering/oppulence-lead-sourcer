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
                  <NavigationMenu>
                    <NavigationMenuList className="space-x-1">
                      <DropdownNavItem trigger="🛠️ Products">
                        <ul className="grid w-[400px] gap-6 bg-background p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem
                            href="https://app.thinkthank.io/signup"
                            title="💰 Financial Management"
                            className="p-4 hover:bg-muted/50"
                          >
                            Complete financial management solution built
                            specifically for your one-person business
                          </ListItem>
                          <ListItem
                            href="https://app.oppulence.app/signup"
                            title="🎯 Lead Management"
                            className="p-4 hover:bg-muted/50"
                          >
                            Convert and manage leads effectively as a one-person
                            business owner
                          </ListItem>
                          <ListItem
                            href="https://prospector.oppulence.app"
                            title="🔍 Prospecting"
                            className="p-4 hover:bg-muted/50"
                          >
                            Find and connect with ideal clients for your
                            one-person business
                          </ListItem>
                          <ListItem
                            href="/contract-management"
                            title="📝 Contract Management"
                            className="p-4 hover:bg-muted/50"
                          >
                            Streamline contract workflows for your one-person
                            business
                          </ListItem>
                          <ListItem
                            href="https://docs.oppulence.app"
                            title="💻 Developers"
                            className="p-4 hover:bg-muted/50"
                          >
                            Access the Oppulence API and documentation
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <DropdownNavItem trigger="📚 Resources">
                        <ul className="grid w-[400px] gap-6 bg-background p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <ListItem
                            href="/about"
                            title="ℹ️ About"
                            className="p-4 hover:bg-muted/50"
                          >
                            Learn more about Oppulence
                          </ListItem>
                          <ListItem
                            href="/blog"
                            title="✍️ Blog"
                            className="p-4 hover:bg-muted/50"
                          >
                            Read insights on Oppulence&apos;s development by our
                            contributors
                          </ListItem>
                          <ListItem
                            href="/faq"
                            title="❓ FAQ"
                            className="p-4 hover:bg-muted/50"
                          >
                            Frequently asked questions about Oppulence
                          </ListItem>
                          <ListItem
                            href="/changelog"
                            title="🔄 Changelog"
                            className="p-4 hover:bg-muted/50"
                          >
                            See what&apos;s new in Oppulence
                          </ListItem>
                        </ul>
                      </DropdownNavItem>
                      <NavItem href="/roadmap">🛠️ Roadmap</NavItem>
                      <NavItem href="/pricing">💎 Pricing</NavItem>

                      {/* <NavItem href="/desktop-download">⬇️ Download</NavItem> */}
                      {/* <NavItem href="https://solomon-ai.betteruptime.com/">
                        ⚡️ Uptime{" "}
                      </NavItem> */}
                      {/* <NavItem href="https://engineering-docs.solomon-ai.app/">
                        📖 Documentation
                      </NavItem> */}
                      {/* <NavItem
                        href="https://github.com/SolomonAIEngineering/solomonai/tree/main"
                        target="_blank"
                      >
                        👨‍💻 GitHub
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
