import type { Meta, StoryObj } from '@storybook/react'

import { NavUser } from '@/components/nav-user'

const meta: Meta<typeof NavUser> = {
    component: NavUser,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
The NavUser component displays user information and provides access to user-related actions.

## Features
- User profile display with avatar
- Dropdown menu for user actions
- Mobile-responsive design
- Account management options
- Session controls

## Usage
\`\`\`tsx
import { NavUser } from "@/components/nav-user";

const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/avatars/john.jpg",
};

export default function UserNavigation() {
  return <NavUser user={user} />;
}
\`\`\`

## Props
- \`user\`: User object containing:
  - \`name\`: User's display name
  - \`email\`: User's email address
  - \`avatar\`: URL to user's avatar image

## Actions
The dropdown menu includes:
- Upgrade to Pro
- Account Settings
- Billing
- Notifications
- Log out

## Accessibility
- ARIA labels for user information
- Keyboard navigation support
- Focus management for dropdown
- Screen reader announcements for actions
- Avatar alt text for assistive technology

## Technical Details
- Uses Radix UI Dropdown Menu
- Implements responsive design
- Handles avatar loading states
- Manages user session state
`
            }
        }
    },
    args: {
        user: {
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://github.com/shadcn.png'
        }
    },
    argTypes: {
        user: {
            control: 'object',
            description: 'User object containing profile information'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavUser>

export const Default: Story = {}

export const WithoutAvatar: Story = {
    args: {
        user: {
            name: 'John Doe',
            email: 'john@example.com',
            avatar: ''
        }
    }
}

export const LongUserInfo: Story = {
    args: {
        user: {
            name: 'John Doe with a Very Long Name That Should Truncate',
            email: 'john.doe.with.a.very.long.email.address@really-long-domain-name.com',
            avatar: 'https://github.com/shadcn.png'
        }
    }
}

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1'
        }
    }
}
