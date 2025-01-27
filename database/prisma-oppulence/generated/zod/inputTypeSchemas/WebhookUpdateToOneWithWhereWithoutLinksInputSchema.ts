import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'
import { WebhookUpdateWithoutLinksInputSchema } from './WebhookUpdateWithoutLinksInputSchema'
import { WebhookUncheckedUpdateWithoutLinksInputSchema } from './WebhookUncheckedUpdateWithoutLinksInputSchema'

export const WebhookUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.WebhookUpdateToOneWithWhereWithoutLinksInput> = z
    .object({
        where: z.lazy(() => WebhookWhereInputSchema).optional(),
        data: z.union([z.lazy(() => WebhookUpdateWithoutLinksInputSchema), z.lazy(() => WebhookUncheckedUpdateWithoutLinksInputSchema)])
    })
    .strict()

export default WebhookUpdateToOneWithWhereWithoutLinksInputSchema
