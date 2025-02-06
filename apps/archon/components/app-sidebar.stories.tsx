import type { Meta, StoryObj } from "@storybook/react";

import { AppSidebar } from "./app-sidebar";

const meta: Meta<typeof AppSidebar> = {
  component: AppSidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
The AppSidebar component is the main navigation sidebar for the application. It provides:
- Team switching functionality
- Main navigation menu
- Project navigation
- User profile and settings

## Features
- Collapsible sidebar with icon-only mode
- Team switcher with dropdown
- Hierarchical navigation menu
- Project quick access
- User profile management

## Usage
\`\`\`tsx
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <AppSidebar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
\`\`\`

## Accessibility
- Fully keyboard navigable
- ARIA labels for all interactive elements
- Focus management for dropdowns
- Screen reader friendly navigation

## Technical Details
- Uses Radix UI primitives for dropdowns and navigation
- Implements responsive design patterns
- Handles mobile and desktop layouts
- Manages state for collapsible sections
`,
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the sidebar",
    },
    collapsible: {
      control: "select",
      options: ["icon", "full", false],
      description: "Controls the collapsible behavior of the sidebar",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppSidebar>;

export const Default: Story = {
  args: {
    className: "h-screen",
  },
};

export const Collapsed: Story = {
  args: {
    className: "h-screen",
    collapsible: "icon",
  },
};

export const Mobile: Story = {
  args: {
    className: "h-screen",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
