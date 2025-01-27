import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutInstalledIntegrationInputSchema } from './WebhookCreateWithoutInstalledIntegrationInputSchema'
import { WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema'
import { WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema } from './WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'

export const WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.WebhookCreateNestedOneWithoutInstalledIntegrationInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => WebhookCreateWithoutInstalledIntegrationInputSchema),
                    z.lazy(() => WebhookUncheckedCreateWithoutInstalledIntegrationInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutInstalledIntegrationInputSchema).optional(),
            connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional()
        })
        .strict()

export default WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema
