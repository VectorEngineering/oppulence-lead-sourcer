import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'
import { WebhookUpdateWithoutLogsInputSchema } from './WebhookUpdateWithoutLogsInputSchema'
import { WebhookUncheckedUpdateWithoutLogsInputSchema } from './WebhookUncheckedUpdateWithoutLogsInputSchema'

export const WebhookUpdateToOneWithWhereWithoutLogsInputSchema: z.ZodType<Prisma.WebhookUpdateToOneWithWhereWithoutLogsInput> = z
    .object({
        where: z.lazy(() => WebhookWhereInputSchema).optional(),
        data: z.union([z.lazy(() => WebhookUpdateWithoutLogsInputSchema), z.lazy(() => WebhookUncheckedUpdateWithoutLogsInputSchema)])
    })
    .strict()

export default WebhookUpdateToOneWithWhereWithoutLogsInputSchema
