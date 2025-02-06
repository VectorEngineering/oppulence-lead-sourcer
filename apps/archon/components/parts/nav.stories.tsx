import { BarChart, Contact, Disc3, Layers, LifeBuoy } from "lucide-react";
// Nav.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import type React from "react";

/**
 * Mock Components and Utilities
 * ----------------------------
 * This section contains all the mock components needed to simulate the Nav component
 * in isolation, without dependencies on Next.js or other external components.
 */

/**
 * MockLink: Simulates Next.js Link component
 * @param href - The destination URL
 * @param className - CSS classes for styling
 * @param children - Child elements to render
 */
const MockLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) => (
  <a href={href} className={className}>
    {children}
  </a>
);

/**
 * Mock configuration object simulating the business configuration
 */
const BusinessConfig = {
  name: "Demo Business",
};

/**
 * MockImage: Simulates Next.js Image component
 * Creates a placeholder div instead of loading actual images
 * @param className - CSS classes for styling
 * @param width - Width of the image
 * @param height - Height of the image
 * @param alt - Alternative text for accessibility
 */
const MockImage = ({
  className,
  src,
  width,
  height,
  alt,
}: {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}) => (
  <div
    className={className}
    style={{ width, height, backgroundColor: "#ccc" }}
    aria-label={alt}
  />
);

/**
 * MockAccountWidget: Simulates the AccountWidget component
 * Displays a simple representation of the account widget with plan information
 * @param plan - The user's subscription plan
 */
const AccountWidget = ({ plan }: { plan: string }) => (
  <div className="rounded border p-4">
    Account Widget (Plan: {plan || "Free"})
  </div>
);

/**
 * MockModeToggle: Simulates the theme toggle component
 * Provides a simple button representation of the theme toggle
 */
const ModeToggle = () => (
  // biome-ignore lint/a11y/useButtonType: <explanation>
  <button className="rounded border p-2">Toggle Mode</button>
);

/**
 * Navigation Links Configuration
 * ----------------------------
 * Define the primary and secondary navigation links used in the component
 */
const links = [
  { href: "/portal", text: "Dashboard", icon: BarChart },
  { href: "/portal/endpoints", text: "Endpoints", icon: Layers },
  { href: "/portal/leads", text: "Leads", icon: Contact },
  { href: "/portal/logs", text: "Logs", icon: Disc3 },
];

const otherLinks = [
  { href: "/portal/support", text: "Support", icon: LifeBuoy },
];

/**
 * NavLink Props Interface
 * @property href - The destination URL
 * @property children - Child elements to render
 * @property icon - The icon component to display
 * @property className - Optional CSS classes
 */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  // biome-ignore lint/suspicious/noExplicitAny: Icon components require flexible typing
  icon: React.ComponentType<any>;
  className?: string;
}

/**
 * NavLink Component
 * A reusable navigation link component that combines an icon with text
 * @param props - NavLinkProps
 */
const NavLink = ({ href, children, icon: Icon, className }: NavLinkProps) => {
  return (
    <MockLink
      className={`group -ml-2 flex items-center gap-2 rounded-md p-2 transition-all ${className}`}
      href={href}
    >
      <Icon
        className="text-muted-foreground group-hover:text-foreground transition-all"
        size={20}
      />
      {children}
    </MockLink>
  );
};

/**
 * Nav Component
 * The main navigation component that provides the primary navigation structure
 * @param plan - The user's subscription plan (defaults to 'free')
 */
const Nav = ({ plan = "free" }) => {
  return (
    <nav className="flex h-screen flex-col justify-between gap-4 p-4">
      <MockLink
        href="/"
        className="bg-muted/50 flex items-center gap-2 rounded-lg border p-6"
      >
        <MockImage
          className="-mt-px mb-px dark:invert"
          src="/logo.svg"
          width={100}
          height={18.53}
          alt={`${BusinessConfig.name} Wordmark`}
        />
      </MockLink>
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
            <AccountWidget plan={plan} />
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
};

/**
 * Storybook Configuration
 * ----------------------
 * Define the component's stories and their configurations
 */
const meta: Meta<typeof Nav> = {
  component: Nav,
  parameters: {
    layout: "fullscreen",
    // Additional information for the documentation
    docs: {
      description: {
        component: `
                    The Nav component is the main navigation structure of the application.
                    It provides:
                    - Brand logo and identity
                    - Primary navigation links
                    - Secondary navigation links
                    - Account information
                    - Theme toggle
                    - Copyright information
                    
                    The component adapts its display based on the user's subscription plan
                    and provides a consistent navigation experience across the application.
                `,
      },
    },
  },
  tags: ["autodocs"],
  // Define the available controls for the story
  argTypes: {
    plan: {
      control: "select",
      options: ["free", "pro", "enterprise"],
      description: "Subscription plan of the user",
      table: {
        defaultValue: { summary: "free" },
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

/**
 * Story Variants
 * -------------
 * Different variations of the Nav component
 */

/**
 * Default story - Shows the navigation with a free plan
 */
export const Default: Story = {
  args: {
    plan: "free",
  },
};

/**
 * Pro Plan story - Demonstrates the navigation appearance for pro users
 */
export const ProPlan: Story = {
  args: {
    plan: "pro",
  },
};

/**
 * Enterprise Plan story - Shows the navigation for enterprise users
 */
export const EnterprisePlan: Story = {
  args: {
    plan: "enterprise",
  },
};
