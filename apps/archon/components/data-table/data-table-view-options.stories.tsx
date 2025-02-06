import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@tanstack/react-table'
import { DataTableViewOptions } from './data-table-view-options'

const meta: Meta<typeof DataTableViewOptions> = {
    component: DataTableViewOptions,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
                    Column visibility toggle component for the DataTable.
                    Features:
                    - Toggle column visibility
                    - Dropdown menu interface
                    - Responsive design
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
type Story = StoryObj<typeof DataTableViewOptions>

// Mock table for stories
const mockTable = {
    getAllColumns: () => [
        {
            id: 'name',
            accessorFn: () => {},
            getCanHide: () => true,
            getIsVisible: () => true,
            toggleVisibility: () => {}
        },
        {
            id: 'email',
            accessorFn: () => {},
            getCanHide: () => true,
            getIsVisible: () => true,
            toggleVisibility: () => {}
        }
    ]
} as unknown as Table<any>

export const Default: Story = {
    args: {
        table: mockTable
    }
}
