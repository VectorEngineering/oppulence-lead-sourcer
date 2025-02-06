import type { Meta, StoryObj } from '@storybook/react'

import { Column } from '@tanstack/react-table'
import { DataTableColumnHeader } from './header'

const meta: Meta<typeof DataTableColumnHeader> = {
    component: DataTableColumnHeader,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
                    Column header component for the DataTable with sorting capabilities.
                    Features:
                    - Sort ascending/descending
                    - Column visibility toggle
                    - Interactive dropdown menu
                `
            }
        }
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className='bg-background p-4'>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof DataTableColumnHeader>

// Mock column for stories
const mockColumn = {
    getCanSort: () => true,
    getIsSorted: () => false,
    toggleSorting: () => {},
    toggleVisibility: () => {}
} as unknown as Column<any, unknown>

export const Default: Story = {
    args: {
        column: mockColumn,
        title: 'Sample Column'
    }
}

export const Sorted: Story = {
    args: {
        column: {
            ...mockColumn,
            getIsSorted: () => 'asc'
        } as unknown as Column<any, unknown>,
        title: 'Sorted Column'
    }
}
