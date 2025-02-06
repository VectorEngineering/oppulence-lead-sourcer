import type { Meta, StoryObj } from '@storybook/react'
import { BookOpen, Bot, Settings2, SquareTerminal } from 'lucide-react'

import { SidebarProvider } from '@/components/ui/sidebar'
import { NavMain } from './nav-main'

const meta: Meta<typeof NavMain> = {
    component: NavMain,
    decorators: [
        (Story) => (
            <SidebarProvider>
                <Story />
            </SidebarProvider>
        )
    ],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
The NavMain component is a collapsible navigation menu that displays the main application routes.

## Features
- Hierarchical navigation structure
- Collapsible sections with animations
- Icon support for menu items
- Active state management
- Keyboard navigation support

## Usage
\`\`\`tsx
import { NavMain } from "@/components/nav-main";
import { Bot, Settings2 } from "lucide-react";

const items = [
  {
    title: "AI Models",
    url: "/models",
    icon: Bot,
    items: [
      { title: "Gallery", url: "/models/gallery" },
      { title: "Settings", url: "/models/settings" },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
    items: [
      { title: "Profile", url: "/settings/profile" },
      { title: "Security", url: "/settings/security" },
    ],
  },
];

export default function Navigation() {
  return <NavMain items={items} />;
}
\`\`\`

## Props
- \`items\`: Array of navigation items with optional sub-items
- Each item can have:
  - \`title\`: Display text
  - \`url\`: Navigation URL
  - \`icon\`: Lucide icon component
  - \`isActive\`: Active state
  - \`items\`: Array of sub-items

## Accessibility
- ARIA roles for navigation
- Keyboard navigation support
- Focus management
- Screen reader announcements
`
            }
        }
    },
    args: {
        items: [
            {
                title: 'Playground',
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                    { title: 'History', url: '#' },
                    { title: 'Starred', url: '#' },
                    { title: 'Settings', url: '#' }
                ]
            },
            {
                title: 'Models',
                url: '#',
                icon: Bot,
                items: [
                    { title: 'Gallery', url: '#' },
                    { title: 'Settings', url: '#' }
                ]
            },
            {
                title: 'Documentation',
                url: '#',
                icon: BookOpen,
                items: [
                    { title: 'Getting Started', url: '#' },
                    { title: 'API Reference', url: '#' }
                ]
            },
            {
                title: 'Settings',
                url: '#',
                icon: Settings2,
                items: [
                    { title: 'Profile', url: '#' },
                    { title: 'Security', url: '#' }
                ]
            }
        ]
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavMain>

export const Default: Story = {}

export const SingleLevel: Story = {
    args: {
        items: [
            {
                title: 'Dashboard',
                url: '#',
                icon: SquareTerminal
            },
            {
                title: 'Settings',
                url: '#',
                icon: Settings2
            }
        ]
    }
}

export const WithActiveItem: Story = {
    args: {
        items: [
            {
                title: 'Dashboard',
                url: '#',
                icon: SquareTerminal,
                isActive: true,
                items: [
                    { title: 'Overview', url: '#' },
                    { title: 'Analytics', url: '#' }
                ]
            },
            {
                title: 'Settings',
                url: '#',
                icon: Settings2,
                items: [
                    { title: 'Profile', url: '#' },
                    { title: 'Security', url: '#' }
                ]
            }
        ]
    }
}
