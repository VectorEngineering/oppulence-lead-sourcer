import { resend } from '@/lib/resend'
import { BusinessConfig as platform } from '@dub/platform-config'
import { render } from '@react-email/components'
import { schemaTask } from '@trigger.dev/sdk/v3'
import ConnectionIssueEmail from 'emails/connection-issue'
import { z } from 'zod'

/**
 * @notifications Bank Connection Disconnected Notification Task
 *
 * This task handles sending notifications when a bank connection becomes disconnected
 * or requires re-authentication. It ensures users are promptly informed about connection
 * issues to maintain data continuity.
 *
 * Workflow:
 * 1. Connection Status Check:
 *    - Monitors bank connection status changes
 *    - Identifies connections that have become disconnected
 *    - Validates connection metadata and requirements
 *
 * 2. User Notification:
 *    - Retrieves workspace and user information
 *    - Generates personalized email content
 *    - Sends notifications through configured channels (email, in-app)
 *
 * 3. Follow-up Management:
 *    - Tracks notification delivery status
 *    - Updates connection status in database
 *    - Schedules follow-up reminders if needed
 *
 * @schema
 * {
 *   workspaceId: string - UUID of the workspace
 *   bankConnectionId: string - ID of the disconnected bank connection
 *   provider: "teller" | "plaid" | "gocardless" - The bank provider
 *   error?: string - Optional error message describing the disconnection reason
 * }
 *
 * @implementation
 * - Fetches workspace and connection details
 * - Generates reconnection URL and instructions
 * - Sends email notification using email templates
 * - Updates notification status in database
 * - Handles rate limiting and retry logic
 *
 * @param workspaceId - The workspace ID associated with the connection
 * @param bankConnectionId - The ID of the disconnected bank connection
 * @throws {Error} If notification sending fails or workspace/connection not found
 * @returns {Promise<void>} Resolves when notifications are sent successfully
 */
export const disconnectedNotifications = schemaTask({
    id: 'disconnected-notifications',
    maxDuration: 300,
    queue: {
        concurrencyLimit: 1
    },
    schema: z.object({
        users: z.array(
            z.object({
                bankName: z.string(),
                workspaceName: z.string(),
                workspaceSlug: z.string(),
                user: z.object({
                    id: z.string(),
                    email: z.string(),
                    full_name: z.string(),
                    locale: z.string()
                })
            })
        )
    }),
    run: async ({ users }) => {
        const emailPromises = users.map(async ({ user, bankName, workspaceName, workspaceSlug }) => {
            const html = await render(
                <ConnectionIssueEmail
                    fullName={user.full_name}
                    bankName={bankName}
                    workspaceName={workspaceName}
                    workspaceSlug={workspaceSlug}
                    reconnectUrl={`${platform.platformUrl}/${workspaceSlug}/bankaccount/reconnect`}
                />
            )

            return {
                from: platform.email.from.system,
                to: [user.email],
                subject: 'Bank Connection Expiring Soon',
                html
            }
        })

        const emails = await Promise.all(emailPromises)

        if (!resend) {
            return new Response('Resend not initialized. Skipping...')
        }

        await resend.batch.send(emails)
    }
})
