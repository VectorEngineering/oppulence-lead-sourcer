import type { Meta, StoryObj } from '@storybook/react'

import { PageWrapper } from './page-wrapper'

const meta: Meta<typeof PageWrapper> = {
    component: PageWrapper,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A wrapper component that provides consistent padding and styling for page content.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Content to be wrapped'
        }
    }
}

export default meta
type Story = StoryObj<typeof PageWrapper>

const ExampleContent = () => (
    <div className='h-[500px]'>
        <h1>Page Content</h1>
        <p>This is an example of page content.</p>
    </div>
)

const LongContent = () => (
    <div className='space-y-4'>
        {Array.from({ length: 10 }).map((_, index) => (
            <div key={`section-${index}-${Math.random()}`} className='rounded border p-4'>
                Section {index + 1}
            </div>
        ))}
    </div>
)

export const Default: Story = {
    args: {
        children: <ExampleContent />
    }
}

export const WithLongContent: Story = {
    args: {
        children: <LongContent />
    }
}
