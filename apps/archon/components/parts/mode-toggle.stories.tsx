import type { Meta, StoryObj } from '@storybook/react'

import { ThemeProvider } from 'next-themes'
import { ModeToggle } from './mode-toggle'

const meta: Meta<typeof ModeToggle> = {
    component: ModeToggle,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A theme toggle component that switches between light, dark, and system themes.'
            }
        }
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                <Story />
            </ThemeProvider>
        )
    ]
}

export default meta
type Story = StoryObj<typeof ModeToggle>

export const Default: Story = {}
