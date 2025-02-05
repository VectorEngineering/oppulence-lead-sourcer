import { WebhookTrigger, WorkspaceProps } from '../types'
import { LeadEventDataProps, LinkEventDataProps, SaleEventDataProps } from './types'

import { prisma } from '@dub/prisma-oppulence'
import { sendWebhooks } from './qstash'

// Send workspace level webhook
export const sendWorkspaceWebhook = async ({
  trigger,
  workspace,
  data,
}: {
  trigger: WebhookTrigger
  workspace: Pick<WorkspaceProps, 'id' | 'webhookEnabled'>
  data: LinkEventDataProps | LeadEventDataProps | SaleEventDataProps
}) => {
  if (!workspace.webhookEnabled) {
    return
  }

  const webhooks = await prisma.webhook.findMany({
    where: {
      projectId: workspace.id,
      disabledAt: null,
      triggers: {
        array_contains: [trigger],
      },
    },
    select: {
      id: true,
      url: true,
      secret: true,
    },
  })

  return sendWebhooks({ trigger, webhooks, data })
}
