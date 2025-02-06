import type { Meta, StoryObj } from '@storybook/react'
import { Frame, PieChart } from 'lucide-react'

import { NavProjects } from '@/components/nav-projects'

const meta: Meta<typeof NavProjects> = {
    component: NavProjects,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
The NavProjects component displays a list of projects with quick actions.

## Features
- Project list with icons
- Quick action dropdown menu
- Mobile-responsive design
- Hover states for actions
- Project management actions

## Usage
\`\`\`tsx
import { NavProjects } from "@/components/nav-projects";
import { Frame, PieChart } from "lucide-react";

const projects = [
  {
    name: "Design System",
    url: "/projects/design",
    icon: Frame,
  },
  {
    name: "Analytics",
    url: "/projects/analytics",
    icon: PieChart,
  },
];

export default function ProjectNavigation() {
  return <NavProjects projects={projects} />;
}
\`\`\`

## Props
- \`projects\`: Array of project objects containing:
  - \`name\`: Project name
  - \`url\`: Project URL
  - \`icon\`: Lucide icon component

## Actions
Each project has a dropdown menu with actions:
- View Project
- Share Project
- Delete Project

## Accessibility
- ARIA labels for actions
- Keyboard navigation
- Focus management for dropdowns
- Screen reader announcements
`
            }
        }
    },
    args: {
        projects: [
            {
                name: 'Design Engineering',
                url: '#',
                icon: Frame
            },
            {
                name: 'Sales & Marketing',
                url: '#',
                icon: PieChart
            },
            {
                name: 'Analytics Dashboard',
                url: '#',
                icon: PieChart
            }
        ]
    },
    argTypes: {
        projects: {
            control: 'object',
            description: 'Array of project objects'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavProjects>

export const Default: Story = {}

export const SingleProject: Story = {
    args: {
        projects: [
            {
                name: 'Main Project',
                url: '#',
                icon: Frame
            }
        ]
    }
}

export const WithLongNames: Story = {
    args: {
        projects: [
            {
                name: 'Very Long Project Name That Should Truncate',
                url: '#',
                icon: Frame
            },
            {
                name: 'Another Extremely Long Project Name For Testing Truncation',
                url: '#',
                icon: PieChart
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
