import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'
import { WebhookUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUpdateWithoutInstalledIntegrationInputSchema'
import { WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema'

export const WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInput> =
    z
        .object({
            where: z.lazy(() => WebhookWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => WebhookUpdateWithoutInstalledIntegrationInputSchema),
                z.lazy(() => WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema)
            ])
        })
        .strict()

export default WebhookUpdateToOneWithWhereWithoutInstalledIntegrationInputSchema
