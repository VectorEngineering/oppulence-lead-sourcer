// Icon Imports
import { BarChart, Contact, Disc3, Layers, LifeBuoy } from "lucide-react";

import AccountWidget from "../auth/widget";
// Component Imports
import { ModeToggle } from "@/components/parts/mode-toggle";
import Logo from "@/public/logo.svg";
import { BusinessConfig } from "@dub/platform-config";
import type { LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Image Imports
import { getUsageForUser } from "@/app/actions/users/get-usage-for-user-action";

const links = [
  { href: "/portal", text: "Dashboard", icon: BarChart },
  { href: "/portal/endpoints", text: "Endpoints", icon: Layers },
  { href: "/portal/leads", text: "Leads", icon: Contact },
  { href: "/portal/logs", text: "Logs", icon: Disc3 },
];

const otherLinks = [
  // { href: "https://router.so/docs", text: "Documentation", icon: Book },
  { href: "/portal/support", text: "Support", icon: LifeBuoy },
];

export default async function Nav() {
  const usage = await getUsageForUser();
  const plan = usage?.data?.usage?.plan;

  return (
    <nav className="flex h-screen flex-col justify-between gap-4 p-4">
      <Link
        href="/"
        className="bg-muted/50 flex items-center gap-2 rounded-lg border p-6"
      >
        <Image
          className="-mt-px mb-px dark:invert"
          src={Logo}
          width={100}
          height={18.53}
          alt={`${BusinessConfig.name} Wordmark`}
        />
      </Link>
      <div className="bg-muted/50 flex h-full flex-col justify-between rounded-lg border p-6">
        <div className="flex flex-col gap-8">
          <div className="grid gap-2">
            {links.map((link) => (
              <NavLink key={link.href} icon={link.icon} href={link.href}>
                {link.text}
              </NavLink>
            ))}
            {otherLinks.map((link) => (
              <NavLink key={link.href} icon={link.icon} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <AccountWidget plan={plan ?? undefined} />
            <div className="flex items-center justify-between gap-2">
              <ModeToggle />
              <p className="text-muted-foreground text-xs opacity-50">
                &copy; {BusinessConfig.name}, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<LucideProps>;
  className?: string;
}

const NavLink = ({ href, children, icon: Icon, className }: NavLinkProps) => {
  return (
    <Link
      className={`group -ml-2 flex items-center gap-2 rounded-md p-2 transition-all ${className}`}
      href={href}
    >
      <Icon
        className="text-muted-foreground group-hover:text-foreground transition-all"
        size={20}
      />
      {children}
    </Link>
  );
};
