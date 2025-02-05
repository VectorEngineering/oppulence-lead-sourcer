import { prisma } from '@dub/prisma-oppulence'
import type { Webhook } from '@dub/prisma-oppulence/client'
import { sendEmail } from 'emails'
import WebhookDisabled from 'emails/webhook-disabled'
import { webhookCache } from './cache'
import { WEBHOOK_FAILURE_NOTIFY_THRESHOLD } from './constants'
import { toggleWebhooksForWorkspace } from './update-webhook'

export const handleWebhookFailure = async (webhookId: string) => {
  const webhook = await prisma.webhook.update({
    where: { id: webhookId },
    data: {
      consecutiveFailures: { increment: 1 },
      lastFailedAt: new Date(),
    },
    select: {
      id: true,
      url: true,
      secret: true,
      triggers: true,
      disabledAt: true,
      consecutiveFailures: true,
      lastFailedAt: true,
      projectId: true,
    },
  })

  if (webhook.disabledAt) {
    return
  }

  const failureThresholdReached = webhook.consecutiveFailures >= WEBHOOK_FAILURE_NOTIFY_THRESHOLD

  if (failureThresholdReached) {
    // Disable the webhook
    const updatedWebhook = await prisma.webhook.update({
      where: { id: webhookId },
      data: {
        disabledAt: new Date(),
      },
    })

    await Promise.allSettled([
      // Notify the user
      sendFailureNotification(updatedWebhook),

      // Update the webhook cache
      webhookCache.set(updatedWebhook),

      // Update the project webhookEnabled flag
      toggleWebhooksForWorkspace({
        workspaceId: webhook.projectId,
      }),
    ])
  }
}

export const resetWebhookFailureCount = async (webhookId: string) => {
  await prisma.webhook.update({
    where: { id: webhookId },
    data: {
      consecutiveFailures: 0,
      lastFailedAt: null,
    },
  })
}

const sendFailureNotification = async (webhook: Pick<Webhook, 'id' | 'url' | 'projectId'>) => {
  const workspaceOwners = await prisma.projectUsers.findFirst({
    where: { projectId: webhook.projectId, role: 'owner' },
    select: {
      project: {
        select: {
          name: true,
          slug: true,
        },
      },
      user: {
        select: {
          email: true,
        },
      },
    },
  })

  if (!workspaceOwners) {
    return
  }

  const email = workspaceOwners.user.email!
  const workspace = workspaceOwners.project

  sendEmail({
    subject: 'Webhook has been disabled',
    email,
    react: WebhookDisabled({
      email,
      workspace: {
        name: workspace.name,
        slug: workspace.slug,
      },
      webhook: {
        id: webhook.id,
        url: webhook.url,
      },
    }),
  })
}
