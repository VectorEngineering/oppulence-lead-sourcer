import type { Meta, StoryObj } from '@storybook/react'

import ExportCSV from './export-csv'

const meta: Meta<typeof ExportCSV> = {
    component: ExportCSV,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A button component that exports data to CSV format.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the export'
        },
        leads: {
            control: 'object',
            description: 'Array of lead data to be exported'
        },
        schema: {
            control: 'object',
            description: 'Schema definition for the CSV columns'
        }
    }
}

export default meta
type Story = StoryObj<typeof ExportCSV>

// Sample data for the stories
const sampleLeads = [
    {
        id: '1',
        data: {
            name: 'John Doe',
            email: 'john@example.com'
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        endpointId: 'endpoint-1'
    },
    {
        id: '2',
        data: {
            name: 'Jane Smith',
            email: 'jane@example.com'
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        endpointId: 'endpoint-2'
    }
]

const sampleSchema = [
    { key: 'name', value: 'string' as ValidationType },
    { key: 'email', value: 'string' as ValidationType }
]

export const Default: Story = {
    args: {
        id: '123',
        leads: sampleLeads,
        schema: sampleSchema
    }
}
