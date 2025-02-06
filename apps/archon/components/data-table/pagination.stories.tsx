import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@tanstack/react-table'
import { DataTablePagination } from './pagination'

const meta: Meta<typeof DataTablePagination> = {
    component: DataTablePagination,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
                    Pagination component for the DataTable.
                    Features:
                    - Page navigation
                    - Items per page selection
                    - Page information display
                    - Responsive design
                `
            }
        }
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className='bg-background w-full max-w-3xl p-4'>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof DataTablePagination>

// Mock table for stories
const mockTable = {
    getState: () => ({
        pagination: {
            pageSize: 10,
            pageIndex: 0
        }
    }),
    setPageSize: () => {},
    getCanPreviousPage: () => true,
    getCanNextPage: () => true,
    previousPage: () => {},
    nextPage: () => {},
    getPageCount: () => 5,
    setPageIndex: () => {}
} as unknown as Table<any>

export const Default: Story = {
    args: {
        table: mockTable
    }
}

export const LastPage: Story = {
    args: {
        table: {
            ...mockTable,
            getState: () => ({
                pagination: {
                    pageSize: 10,
                    pageIndex: 4
                }
            }),
            getCanNextPage: () => false
        } as unknown as Table<any>
    }
}
