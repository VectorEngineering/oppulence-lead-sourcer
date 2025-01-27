import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateWithoutProjectInputSchema } from './WebhookUpdateWithoutProjectInputSchema'
import { WebhookUncheckedUpdateWithoutProjectInputSchema } from './WebhookUncheckedUpdateWithoutProjectInputSchema'

export const WebhookUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.WebhookUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => WebhookWhereUniqueInputSchema),
        data: z.union([z.lazy(() => WebhookUpdateWithoutProjectInputSchema), z.lazy(() => WebhookUncheckedUpdateWithoutProjectInputSchema)])
    })
    .strict()

export default WebhookUpdateWithWhereUniqueWithoutProjectInputSchema
