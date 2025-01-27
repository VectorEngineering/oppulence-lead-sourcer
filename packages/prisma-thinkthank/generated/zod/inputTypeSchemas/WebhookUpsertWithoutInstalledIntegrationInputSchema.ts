import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUpdateWithoutInstalledIntegrationInputSchema'
import { WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema'
import { WebhookCreateWithoutInstalledIntegrationInputSchema } from './WebhookCreateWithoutInstalledIntegrationInputSchema'
import { WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const WebhookUpsertWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.WebhookUpsertWithoutInstalledIntegrationInput> = z
    .object({
        update: z.union([
            z.lazy(() => WebhookUpdateWithoutInstalledIntegrationInputSchema),
            z.lazy(() => WebhookUncheckedUpdateWithoutInstalledIntegrationInputSchema)
        ]),
        create: z.union([
            z.lazy(() => WebhookCreateWithoutInstalledIntegrationInputSchema),
            z.lazy(() => WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema)
        ]),
        where: z.lazy(() => WebhookWhereInputSchema).optional()
    })
    .strict()

export default WebhookUpsertWithoutInstalledIntegrationInputSchema
