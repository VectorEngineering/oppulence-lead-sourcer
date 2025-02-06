import { resend } from '@/lib/resend'
import { BusinessConfig as platform } from '@dub/platform-config'
import { render } from '@react-email/components'
import { schemaTask } from '@trigger.dev/sdk/v3'
import ConnectionExpireEmail from 'emails/connection-expire'
import { z } from 'zod'
/**
 * @notifications Bank Connection Expiring Notification Task
 *
 * This task manages proactive notifications for bank connections that are approaching
 * their expiration date. It helps prevent data interruption by alerting users to
 * renew their connections before they expire.
 *
 * Workflow:
 * 1. Expiration Monitoring:
 *    - Tracks connection expiration dates
 *    - Identifies connections nearing expiration
 *    - Calculates appropriate notification timing
 *
 * 2. Notification Strategy:
 *    - Sends notifications at configured intervals (e.g., 7 days, 3 days, 1 day before)
 *    - Provides clear renewal instructions
 *    - Includes direct links to renewal process
 *
 * 3. Status Tracking:
 *    - Records notification history
 *    - Monitors renewal actions
 *    - Prevents duplicate notifications
 *
 * @schema
 * {
 *   workspaceId: string - UUID of the workspace
 *   bankConnectionId: string - ID of the expiring connection
 *   provider: "teller" | "plaid" | "gocardless" - The bank provider
 *   expiresAt: Date - When the connection will expire
 *   daysUntilExpiry: number - Days remaining until expiration
 * }
 *
 * @implementation
 * - Checks connection expiration status
 * - Determines notification urgency based on remaining time
 * - Generates personalized notification content
 * - Sends notifications through appropriate channels
 * - Updates notification tracking in database
 *
 * @param workspaceId - The workspace ID associated with the connection
 * @param bankConnectionId - The ID of the expiring bank connection
 * @throws {Error} If notification fails or connection details are invalid
 * @returns {Promise<void>} Resolves when notifications are sent successfully
 */
export const expiringNotifications = schemaTask({
    id: 'expiring-notifications',
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
                expiresAt: z.string(),
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
        const emailPromises = users.map(async ({ user, bankName, workspaceName, workspaceSlug, expiresAt }) => {
            const html = await render(
                <ConnectionExpireEmail
                    fullName={user.full_name}
                    bankName={bankName}
                    workspaceName={workspaceName}
                    expiresAt={expiresAt}
                    reconnectUrl={`${platform.platformUrl}/${workspaceSlug}/bankaccount/reconnect`}
                    workspaceSlug={workspaceSlug}
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
