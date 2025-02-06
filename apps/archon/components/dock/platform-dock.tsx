"use client";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/dock/dock";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Activity,
  Bell,
  Calendar,
  CircuitBoardIcon,
  Contact,
  HelpCircle,
  PhoneForwardedIcon,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";

import { PlatformModal } from "@/components/modals/platform-modal";
import { useRouter } from "next/navigation";

// ============================================================================
// Types & Interfaces
// ============================================================================

/**
 * Platform section configuration
 * @interface PlatformSection
 */
interface PlatformSection {
  /** The display title of the section */
  title: string;
  /** React node representing the section's icon */
  icon: React.ReactNode;
  /** The content to be displayed when this section is active */
  content: React.ReactNode;
  /** Optional route to navigate to instead of opening modal */
  route?: string;
}

/**
 * Props for the MetricCard component
 * @interface MetricCardProps
 */
interface MetricCardProps {
  /** The icon to display */
  icon: React.ReactNode;
  /** The label for the metric */
  label: string;
  /** The value to display */
  value: string;
}

/**
 * Props for the ActivityItem component
 * @interface ActivityItemProps
 */
interface ActivityItemProps {
  /** The message to display */
  message: string;
  /** The time to display */
  time: string;
}

/**
 * Props for the QuickActions component
 * @interface QuickActionsProps
 */
interface QuickActionsProps {
  /** Array of action names */
  actions: string[];
  /** Callback when an action is clicked */
  onActionClick?: (action: string) => void;
}

/**
 * Props for the DashboardHeader component
 * @interface DashboardHeaderProps
 */
interface DashboardHeaderProps {
  /** The title to display */
  title: string;
}

/**
 * Props for the DockButton component
 * @interface DockButtonProps
 */
interface DockButtonProps {
  /** The item data */
  item: PlatformSection;
  /** Click handler */
  onClick: () => void;
  /** Keyboard shortcut */
  shortcut: string;
}

/**
 * Props for the HelpDockButton component
 * @interface HelpDockButtonProps
 */
interface HelpDockButtonProps {
  /** Array of platform sections */
  sections: PlatformSection[];
}

// ============================================================================
// Dashboard Components
// ============================================================================

/**
 * MetricCard Component
 * Displays a single metric with an icon and value
 */
function MetricCard({ icon, label, value }: MetricCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-xl border p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 rounded-lg p-3">{icon}</div>
        <div>
          <p className="text-muted-foreground text-sm">{label}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
}

/**
 * ActivityItem Component
 * Displays a single activity item with a dot indicator
 */
function ActivityItem({ message, time }: ActivityItemProps) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="bg-primary h-2 w-2 rounded-full" />
      <p className="text-muted-foreground">{message}</p>
      <p className="ml-auto text-xs">{time}</p>
    </div>
  );
}

/**
 * QuickActions Component
 * Displays a grid of quick action buttons
 */
function QuickActions({ actions, onActionClick }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {actions.map((action) => (
        <button
          type="button"
          key={action}
          onClick={() => onActionClick?.(action)}
          className="hover:bg-muted rounded-lg border p-3 text-sm transition-colors"
        >
          {action}
        </button>
      ))}
    </div>
  );
}

/**
 * DashboardHeader Component
 * Displays the dashboard header with notifications
 */
function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex items-center gap-4">
        <Bell className="text-muted-foreground h-5 w-5" />
        <Calendar className="text-muted-foreground h-5 w-5" />
      </div>
    </div>
  );
}

// ============================================================================
// Dock Components
// ============================================================================

/**
 * DockButton Component
 * Renders a single dock button with icon and label
 */
function DockButton({ item, onClick, shortcut }: DockButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (item.route) {
      router.push(item.route);
    } else {
      onClick();
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleClick}
            onKeyUp={(e) => e.key === "Enter" && handleClick()}
          >
            <DockItem className="aspect-square rounded-xl border border-white/30 bg-gradient-to-br from-white/80 via-white/50 to-white/30 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-2xl dark:border-neutral-800/70 dark:from-neutral-800/90 dark:via-neutral-800/70 dark:to-neutral-900/60 dark:hover:border-neutral-700">
              <DockLabel className="rounded-md border border-white/20 bg-neutral-900/90 px-3 py-1 text-white shadow-xl backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/95">
                {item.title}
              </DockLabel>
              <DockIcon className="flex h-10 w-10 items-center justify-center text-neutral-800 transition-all duration-200 group-hover:text-neutral-900 dark:text-neutral-100 dark:group-hover:text-white">
                <div className="h-6 w-6">{item.icon}</div>
              </DockIcon>
            </DockItem>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="flex items-center gap-2">
          <span>{item.title}</span>
          <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium">
            {shortcut}
          </kbd>
          {item.route && (
            <span className="text-muted-foreground text-xs">
              → {item.route}
            </span>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

/**
 * HelpDockButton Component
 * Renders a help button in the dock with keyboard shortcuts
 */
function HelpDockButton({ sections }: HelpDockButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button">
          <DockItem className="aspect-square rounded-xl border border-white/30 bg-gradient-to-br from-white/80 via-white/50 to-white/30 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-2xl dark:border-neutral-800/70 dark:from-neutral-800/90 dark:via-neutral-800/70 dark:to-neutral-900/60 dark:hover:border-neutral-700">
            <DockLabel className="rounded-md border border-white/20 bg-neutral-900/90 px-3 py-1 text-white shadow-xl backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/95">
              Help
            </DockLabel>
            <DockIcon className="flex h-10 w-10 items-center justify-center text-neutral-800 transition-all duration-200 group-hover:text-neutral-900 dark:text-neutral-100 dark:group-hover:text-white">
              <div className="h-6 w-6">
                <HelpCircle className="h-full w-full" />
              </div>
            </DockIcon>
          </DockItem>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[320px] p-0 shadow-xl"
        align="end"
        sideOffset={16}
      >
        <div className="relative overflow-hidden rounded-md">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 p-4 dark:from-neutral-800 dark:to-neutral-900">
            <h3 className="text-md bg-gradient-to-r from-white to-white/70 bg-clip-text font-semibold text-transparent">
              Keyboard Shortcuts
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Quick access to platform sections
            </p>
          </div>

          {/* Shortcuts Section */}
          <div className="bg-white p-3 dark:bg-neutral-950">
            <div className="space-y-0.5">
              {sections.map((section, index) => (
                <div
                  key={section.title}
                  className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-900">
                      {section.icon}
                    </div>
                    <span className="font-base text-sm">{section.title}</span>
                  </div>
                  <kbd className="flex h-6 items-center justify-center rounded-md bg-neutral-100 px-2 font-mono text-[11px] font-medium text-neutral-600 shadow-sm dark:bg-neutral-900 dark:text-neutral-400">
                    ⌘{index + 1}
                  </kbd>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tips */}
          <div className="border-t border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950/50">
            <h4 className="text-foreground mb-2 text-sm font-medium">
              Navigation Tips
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="mt-0.5 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
                  <Search className="h-3 w-3" />
                </div>
                <p>Use the search bar to quickly find specific content</p>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="mt-0.5 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
                  <Activity className="h-3 w-3" />
                </div>
                <p>Switch between sections using the sidebar navigation</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ============================================================================
// Platform Data
// ============================================================================

/**
 * Platform sections configuration
 */
const PLATFORM_SECTIONS: PlatformSection[] = [
  {
    title: "Home",
    icon: <CircuitBoardIcon className="h-full w-full" />,
    content: (
      <div className="space-y-8 p-[4%]">
        <DashboardHeader title="Welcome Back" />
      </div>
    ),
  },
  {
    title: "Leads",
    icon: <Contact className="h-full w-full" />,
    content: (
      <div className="space-y-8 p-[4%]">
        <DashboardHeader title="Leads" />
      </div>
    ),
  },
  {
    title: "Communication",
    icon: <PhoneForwardedIcon className="h-full w-full" />,
    content: (
      <div className="space-y-8 p-[4%]">
        <DashboardHeader title="Communication" />
      </div>
    ),
  },
  {
    title: "Activity",
    icon: <Activity className="h-full w-full" />,
    content: (
      <div className="space-y-8 p-[4%]">
        <DashboardHeader title="Activity" />
      </div>
    ),
  },
];

// ============================================================================
// Hooks
// ============================================================================

/**
 * Hook to manage keyboard shortcuts
 * @param onSectionChange - Callback when a section is selected via keyboard
 * @param sections - Array of platform sections
 */
function useKeyboardShortcuts(
  onSectionChange: (section: PlatformSection) => void,
  sections: PlatformSection[],
) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        !event.shiftKey &&
        !event.altKey
      ) {
        const num = Number.parseInt(event.key);
        if (num >= 1 && num <= sections.length) {
          event.preventDefault();
          const section = sections[num - 1];
          if (section.route) {
            router.push(section.route);
          } else {
            onSectionChange(section);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sections, onSectionChange, router]);
}

// ============================================================================
// Main Component
// ============================================================================

/**
 * AppleStyleDock Component
 *
 * A dock-style navigation component that provides access to different platform sections
 * through a modal interface.
 *
 * @component
 */
export function AppleStyleDock() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    PLATFORM_SECTIONS[0].title,
  );

  const handleSectionChange = (section: PlatformSection) => {
    if (!section.route) {
      setIsOpen(true);
      setActiveSection(section.title);
    }
  };

  useKeyboardShortcuts(handleSectionChange, PLATFORM_SECTIONS);

  return (
    <>
      <PlatformModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Platform"
        sections={PLATFORM_SECTIONS.filter((section) => !section.route)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      >
        {PLATFORM_SECTIONS.find((s) => s.title === activeSection)?.content}
      </PlatformModal>

      <div className="absolute bottom-[8%] left-1/2 max-w-full -translate-x-1/2">
        <Dock className="flex justify-center space-x-1 rounded-2xl border border-black/10 px-4 py-2 backdrop-blur-xl">
          {PLATFORM_SECTIONS.map((item, index) => (
            <DockButton
              key={item.title}
              item={item}
              shortcut={`⌘${index + 1}`}
              onClick={() => handleSectionChange(item)}
            />
          ))}
          <HelpDockButton sections={PLATFORM_SECTIONS} />
        </Dock>
      </div>
    </>
  );
}
