import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookCreateWithoutInstalledIntegrationInputSchema } from './WebhookCreateWithoutInstalledIntegrationInputSchema'
import { WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema'

export const WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.WebhookCreateOrConnectWithoutInstalledIntegrationInput> =
    z
        .object({
            where: z.lazy(() => WebhookWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => WebhookCreateWithoutInstalledIntegrationInputSchema),
                z.lazy(() => WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema)
            ])
        })
        .strict()

export default WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema
