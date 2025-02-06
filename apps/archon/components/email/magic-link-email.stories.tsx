import type { Meta, StoryObj } from '@storybook/react'

import MagicLinkEmail from './magic-link-email'

/**
 * The MagicLinkEmail component is used for generating magic link authentication emails.
 * It provides a consistent email template with login instructions and branding.
 */
const meta: Meta<typeof MagicLinkEmail> = {
    component: MagicLinkEmail,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
                    # Magic Link Email Component
                    
                    A component that renders the email template for magic link authentication.
                    This component is used when sending authentication emails to users,
                    providing them with a secure, passwordless login mechanism.

                    ## Features
                    - Clean, minimal design
                    - Clear call-to-action
                    - Security disclaimer
                    - Brand consistency
                    - Responsive layout
                    
                    ## Usage Guidelines
                    - Use for authentication emails only
                    - Ensure URL is properly encoded
                    - Include valid host information
                    - Maintain consistent branding
                `
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        url: {
            control: 'text',
            description: 'The magic link URL for authentication',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Required' }
            }
        },
        host: {
            control: 'text',
            description: 'The host domain name',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Required' }
            }
        }
    },
    // Add decorators to simulate email environment
    decorators: [
        (Story) => (
            <div className='mx-auto max-w-md rounded-lg border bg-white p-6 shadow-sm'>
                <Story />
            </div>
        )
    ]
}

export default meta
type Story = StoryObj<typeof MagicLinkEmail>

/**
 * Default presentation of the magic link email
 */
export const Default: Story = {
    args: {
        url: 'https://app.example.com/auth/verify?token=abc123',
        host: 'app.example.com'
    }
}

/**
 * Example with a long domain name
 */
export const LongDomain: Story = {
    args: {
        url: 'https://very-long-subdomain.example.com/auth/verify?token=abc123',
        host: 'very-long-subdomain.example.com'
    }
}

/**
 * Example with development environment
 */
export const Development: Story = {
    args: {
        url: 'http://localhost:3000/auth/verify?token=abc123',
        host: 'localhost:3000'
    }
}

/**
 * Example with staging environment
 */
export const Staging: Story = {
    args: {
        url: 'https://staging.example.com/auth/verify?token=abc123',
        host: 'staging.example.com'
    }
}

/**
 * Example with custom branding
 */
export const CustomBranding: Story = {
    args: {
        url: 'https://app.customdomain.com/auth/verify?token=abc123',
        host: 'app.customdomain.com'
    },
    decorators: [
        (Story) => (
            <div className='mx-auto max-w-md rounded-lg border bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm'>
                <Story />
            </div>
        )
    ]
}
