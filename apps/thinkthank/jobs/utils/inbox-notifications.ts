import { NotificationTypes, triggerBulk, TriggerEvents } from '@dub/notifications'
import { prisma } from '@dub/prisma-thinkthank'
import { Role } from '@prisma/client'

/**
 * Handles sending inbox notifications to workspace members
 *
 * This function fetches all workspace members and sends them in-app notifications
 * about new inbox items.
 *
 * @param params - The parameters for handling inbox notifications
 * @param params.inboxId - The unique identifier of the inbox
 * @param params.description - The description of the inbox notification
 * @param params.workspaceId - The team identifier for which to send notifications
 *
 * @example
 * ```ts
 * await handleInboxNotifications({
 *   inboxId: "inbox_123",
 *   description: "New message received",
 *   workspaceId: "team_456"
 * });
 * ```
 *
 * @remarks
 * - Only sends notifications to users with "owner" role
 * - Skips if no team owners are found
 * - Handles bulk notification triggering for efficiency
 */
export async function handleInboxNotifications({
    inboxId,
    description,
    workspaceId
}: {
    inboxId: string
    description: string
    workspaceId: string
}) {
    // get the set of workspace owners tied to the current workspace
    const workspaceOwners = await prisma.projectUsers.findMany({
        where: {
            project: {
                id: workspaceId
            },
            role: {
                equals: Role.owner
            }
        },
        include: {
            user: true
        }
    })

    if (!workspaceOwners || workspaceOwners.length === 0) {
        return
    }

    // construct the notification events
    const notificationEvents = await Promise.all(
        workspaceOwners.map(async (workspaceOwner) => {
            if (!workspaceOwner.id) return []

            return [
                {
                    name: TriggerEvents.InboxNewInApp,
                    payload: {
                        recordId: inboxId,
                        description,
                        type: NotificationTypes.Inbox
                    },
                    user: {
                        subscriberId: workspaceOwner.id,
                        workspaceId,
                        email: workspaceOwner.user.email ?? '',
                        fullName: workspaceOwner.user.name ?? '',
                        avatarUrl: workspaceOwner.user.image ?? ''
                    }
                }
            ]
        })
    )

    if (notificationEvents.length) {
        triggerBulk(notificationEvents?.flat())
    }
}
