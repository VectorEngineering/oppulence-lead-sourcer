import type { Meta, StoryObj } from '@storybook/react'

import { Breadcrumbs } from './breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A navigation component that shows the current page location in a hierarchical structure.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        pageName: {
            control: 'text',
            description: 'The name of the current page'
        },
        isLoading: {
            control: 'boolean',
            description: 'Shows a loading state when true'
        }
    }
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
    args: {
        pageName: 'Dashboard',
        isLoading: false
    }
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const CustomPage: Story = {
    args: {
        pageName: 'Settings',
        isLoading: false
    }
}
