/**
 * @fileoverview Handles invoice-related notifications, including both in-app notifications
 * and email notifications for paid and overdue invoices.
 */

import { NotificationTypes, TriggerEvents, TriggerUser, triggerBulk } from '@dub/notifications'

import InvoiceOverdueEmail from '../../emails/invoice-overdue'
import InvoicePaidEmail from '../../emails/invoice-paid'
import { logger } from '@trigger.dev/sdk/v3'
import { BusinessConfig as platform } from '@dub/platform-config'
import { render } from '@react-email/render'

/**
 * User information required for notifications
 */
interface UserInfo {
    /** Unique identifier for the user */
    id: string
    /** User's email address */
    email: string
    /** User's full name */
    full_name: string
    /** Optional URL to user's avatar */
    avatar_url?: string
    /** User's preferred locale */
    locale?: string
    /** Associated workspace identifier */
    workspace_id: string
}

/**
 * Represents a user in the context of a team/workspace
 */
export interface WorkspaceUser {
    /** User information */
    user: UserInfo
    /** Associated workspace identifier */
    workspace_id: string
}

/**
 * Base structure for all notification events
 */
interface BaseNotificationEvent {
    /** Type of trigger event */
    name: TriggerEvents
    /** User information for the notification */
    user: TriggerUser & {
        workspaceId: string
        avatarUrl?: string
    }
}

/**
 * Structure for in-app notifications
 */
interface InAppNotificationEvent extends BaseNotificationEvent {
    payload: {
        /** Type of notification */
        type: NotificationTypes
        /** ID of the related record */
        recordId: string
        /** Human-readable description */
        description: string
    }
}

/**
 * Structure for email notifications
 */
interface EmailNotificationEvent extends BaseNotificationEvent {
    payload: {
        /** Email subject line */
        subject: string
        /** Rendered HTML content */
        html: string
    }
}

/**
 * Handles notifications for paid invoices
 *
 * @param params - Parameters for paid invoice notifications
 * @param params.user - Array of team users to notify
 * @param params.invoiceId - Unique identifier of the paid invoice
 * @param params.invoiceNumber - Human-readable invoice number
 * @param params.workspaceId - Identifier of the workspace
 * @param params.teamSlug - URL-friendly team identifier
 *
 * @remarks
 * This function sends both in-app notifications and emails to all specified users
 * when an invoice is marked as paid. It handles error logging if notifications fail.
 */
export async function handlePaidInvoiceNotifications({
    user,
    invoiceId,
    invoiceNumber,
    customerName,
    workspaceName,
    workspaceId,
    teamSlug
}: {
    user: WorkspaceUser[]
    invoiceId: string
    invoiceNumber: string
    customerName: string
    workspaceName: string
    workspaceId: string
    teamSlug: string
}) {
    const link = `${platform.platformUrl}/${teamSlug}/invoices?invoiceId=${invoiceId}&type=details`

    const paidNotificationEvents = user
        .map(({ user: u, workspace_id }) => {
            if (!u) {
                return null
            }

            return {
                name: TriggerEvents.InvoicePaidInApp,
                payload: {
                    type: NotificationTypes.Invoice,
                    recordId: invoiceId,
                    description: `Invoice ${invoiceNumber} paid`
                },
                user: {
                    subscriberId: u.id,
                    workspaceId: workspace_id,
                    email: u.email,
                    fullName: u.full_name,
                    avatarUrl: u.avatar_url
                }
            }
        })
        .filter(Boolean) as InAppNotificationEvent[]

    try {
        await triggerBulk(paidNotificationEvents)
    } catch (error) {
        await logger.error('Paid invoice notification', { error })
    }

    const paidEmailPromises = user
        .map(async ({ user: u, workspace_id }) => {
            if (!u) {
                return null
            }

            const html = await render(
                <InvoicePaidEmail
                    invoiceNumber={invoiceNumber}
                    link={link}
                    teamSlug={teamSlug}
                    customerName={customerName}
                    teamName={workspaceName}
                />
            )

            return {
                name: TriggerEvents.InvoicePaidEmail,
                payload: {
                    subject: `Invoice ${invoiceNumber} paid`,
                    html
                },
                user: {
                    subscriberId: u.id,
                    workspaceId: workspace_id,
                    email: u.email,
                    fullName: u.full_name,
                    avatarUrl: u.avatar_url
                }
            }
        })
        .filter(Boolean) as Promise<EmailNotificationEvent>[]

    const validPaidEmailPromises = await Promise.all(paidEmailPromises)

    try {
        await triggerBulk(validPaidEmailPromises)
    } catch (error) {
        await logger.error('Paid invoice email', { error })
    }
}

/**
 * Handles notifications for overdue invoices
 *
 * @param params - Parameters for overdue invoice notifications
 * @param params.user - Array of team users to notify
 * @param params.invoiceId - Unique identifier of the overdue invoice
 * @param params.invoiceNumber - Human-readable invoice number
 * @param params.customerName - Name of the customer for personalization
 * @param params.teamSlug - URL-friendly team identifier
 *
 * @remarks
 * This function sends both in-app notifications and emails to all specified users
 * when an invoice becomes overdue. It includes customer information in the notifications
 * and handles error logging if notifications fail.
 */
export async function handleOverdueInvoiceNotifications({
    user,
    invoiceId,
    invoiceNumber,
    customerName,
    teamSlug
}: {
    user: WorkspaceUser[]
    invoiceId: string
    invoiceNumber: string
    customerName: string
    teamSlug: string
}) {
    const link = `${platform.platformUrl}/${teamSlug}/invoices?invoiceId=${invoiceId}&type=details`

    const overdueNotificationEvents = user
        .map(({ user: u, workspace_id }) => {
            if (!u) {
                return null
            }

            return {
                name: TriggerEvents.InvoiceOverdueInApp,
                payload: {
                    type: NotificationTypes.Invoice,
                    recordId: invoiceId,
                    description: `Invoice ${invoiceNumber} overdue`
                },
                user: {
                    subscriberId: u.id,
                    workspaceId: workspace_id,
                    email: u.email,
                    fullName: u.full_name,
                    avatarUrl: u.avatar_url
                }
            }
        })
        .filter(Boolean) as InAppNotificationEvent[]

    try {
        await triggerBulk(overdueNotificationEvents)
    } catch (error) {
        await logger.error('Overdue invoice notification', { error })
    }

    const overdueEmailPromises = user
        .map(async ({ user: u, workspace_id }) => {
            if (!u) {
                return null
            }

            const html = await render(
                <InvoiceOverdueEmail invoiceNumber={invoiceNumber} customerName={customerName} link={link} teamSlug={teamSlug} />
            )

            return {
                name: TriggerEvents.InvoiceOverdueEmail,
                payload: {
                    subject: `Invoice ${invoiceNumber} overdue`,
                    html
                },
                user: {
                    subscriberId: u.id,
                    workspaceId: workspace_id,
                    email: u.email,
                    fullName: u.full_name,
                    avatarUrl: u.avatar_url
                }
            }
        })
        .filter(Boolean) as Promise<EmailNotificationEvent>[]

    const validOverdueEmailPromises = await Promise.all(overdueEmailPromises)

    try {
        await triggerBulk(validOverdueEmailPromises)
    } catch (error) {
        await logger.error('Overdue invoice email', { error })
    }
}
