import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateWithoutLinksInputSchema } from './WebhookCreateWithoutLinksInputSchema'
import { WebhookUncheckedCreateWithoutLinksInputSchema } from './WebhookUncheckedCreateWithoutLinksInputSchema'
import { WebhookCreateOrConnectWithoutLinksInputSchema } from './WebhookCreateOrConnectWithoutLinksInputSchema'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'

export const WebhookCreateNestedOneWithoutLinksInputSchema: z.ZodType<Prisma.WebhookCreateNestedOneWithoutLinksInput> = z
    .object({
        create: z
            .union([z.lazy(() => WebhookCreateWithoutLinksInputSchema), z.lazy(() => WebhookUncheckedCreateWithoutLinksInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => WebhookCreateOrConnectWithoutLinksInputSchema).optional(),
        connect: z.lazy(() => WebhookWhereUniqueInputSchema).optional()
    })
    .strict()

export default WebhookCreateNestedOneWithoutLinksInputSchema
