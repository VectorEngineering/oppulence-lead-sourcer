import type { Meta, StoryObj } from '@storybook/react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'

import { TeamSwitcher } from '@/components/team-switcher'

const meta: Meta<typeof TeamSwitcher> = {
    component: TeamSwitcher,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
The TeamSwitcher component allows users to switch between different teams or workspaces.

## Features
- Team selection dropdown
- Team logo display
- Plan information
- Add new team option
- Keyboard shortcuts

## Usage
\`\`\`tsx
import { TeamSwitcher } from "@/components/team-switcher";
import { Command, GalleryVerticalEnd } from "lucide-react";

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Personal",
    logo: Command,
    plan: "Free",
  },
];

export default function TeamNavigation() {
  return <TeamSwitcher teams={teams} />;
}
\`\`\`

## Props
- \`teams\`: Array of team objects containing:
  - \`name\`: Team name
  - \`logo\`: Lucide icon component
  - \`plan\`: Subscription plan name

## Keyboard Shortcuts
- ⌘1-9: Quick switch to teams
- ↑/↓: Navigate teams
- Enter: Select team
- Esc: Close dropdown

## Accessibility
- ARIA labels for team selection
- Keyboard navigation support
- Focus management
- Screen reader announcements
- Role descriptions

## Technical Details
- Uses Radix UI Dropdown Menu
- Maintains selected team state
- Handles team switching logic
- Supports keyboard shortcuts
`
            }
        }
    },
    args: {
        teams: [
            {
                name: 'Acme Inc',
                logo: GalleryVerticalEnd,
                plan: 'Enterprise'
            },
            {
                name: 'Acme Corp',
                logo: AudioWaveform,
                plan: 'Startup'
            },
            {
                name: 'Personal',
                logo: Command,
                plan: 'Free'
            }
        ]
    },
    argTypes: {
        teams: {
            control: 'object',
            description: 'Array of team objects'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TeamSwitcher>

export const Default: Story = {}

export const SingleTeam: Story = {
    args: {
        teams: [
            {
                name: 'Solo Project',
                logo: Command,
                plan: 'Free'
            }
        ]
    }
}

export const WithLongNames: Story = {
    args: {
        teams: [
            {
                name: 'Very Long Team Name That Should Truncate Properly',
                logo: GalleryVerticalEnd,
                plan: 'Enterprise Plus Premium Extended'
            },
            {
                name: 'Another Long Team Name for Testing',
                logo: Command,
                plan: 'Professional Extended Plus'
            }
        ]
    }
}

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}
