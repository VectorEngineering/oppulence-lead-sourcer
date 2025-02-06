"use client";

import type * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  AudioWaveform,
  BarChart,
  Contact,
  Disc3,
  GalleryVerticalEnd,
  Home,
  Layers,
  LifeBuoy,
} from "lucide-react";

import { useUser } from "@clerk/nextjs";
import type { Workspace } from "@dub/prisma-archon/client";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/portal",
      icon: Home,
    },
    {
      title: "Dashboard",
      url: "/portal/dashboard",
      icon: BarChart,
      items: [
        {
          title: "Analytics",
          url: "/portal/dashboard/analytics",
        },
        {
          title: "Reports",
          url: "/portal/dashboard/reports",
        },
      ],
    },
    {
      title: "Endpoints",
      url: "/portal/endpoints",
      icon: Layers,
      items: [
        {
          title: "All Endpoints",
          url: "/portal/endpoints",
        },
        {
          title: "Create Endpoint",
          url: "/portal/endpoints/create",
        },
        {
          title: "Settings",
          url: "/portal/endpoints/settings",
        },
      ],
    },
    {
      title: "Leads",
      url: "/portal/leads",
      icon: Contact,
      items: [
        {
          title: "All Leads",
          url: "/portal/leads",
        },
        {
          title: "Active",
          url: "/portal/leads/active",
        },
        {
          title: "Archived",
          url: "/portal/leads/archived",
        },
        {
          title: "Settings",
          url: "/portal/leads/settings",
        },
      ],
    },
    {
      title: "Logs",
      url: "/portal/logs",
      icon: Disc3,
      items: [
        {
          title: "All Logs",
          url: "/portal/logs",
        },
        {
          title: "Errors",
          url: "/portal/logs/errors",
        },
        {
          title: "Webhooks",
          url: "/portal/logs/webhooks",
        },
      ],
    },
    {
      title: "Support",
      url: "/portal/support",
      icon: LifeBuoy,
      items: [
        {
          title: "Help Center",
          url: "/portal/support",
        },
        {
          title: "Contact",
          url: "/portal/support/contact",
        },
        {
          title: "Documentation",
          url: "/portal/support/docs",
        },
      ],
    },
  ],
};

export function AppSidebar({
  plan,
  workspaces,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  plan?: "free" | "lite" | "pro" | "business" | "enterprise";
  workspaces: Array<Workspace>;
}) {
  // get the current authenticated user
  const { user } = useUser();

  return (
    <Sidebar collapsible="icon" className="h-full border-none" {...props}>
      {workspaces && workspaces.length > 0 && (
        <SidebarHeader className="border-b border-gray-200">
          <TeamSwitcher />
        </SidebarHeader>
      )}
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: user?.fullName ?? "",
            email: user?.emailAddresses[0].emailAddress ?? "",
            avatar: user?.imageUrl ?? "",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
