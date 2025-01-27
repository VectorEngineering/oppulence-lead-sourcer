import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookScalarWhereInputSchema } from './WebhookScalarWhereInputSchema'
import { WebhookUpdateManyMutationInputSchema } from './WebhookUpdateManyMutationInputSchema'
import { WebhookUncheckedUpdateManyWithoutProjectInputSchema } from './WebhookUncheckedUpdateManyWithoutProjectInputSchema'

export const WebhookUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.WebhookUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => WebhookScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => WebhookUpdateManyMutationInputSchema),
            z.lazy(() => WebhookUncheckedUpdateManyWithoutProjectInputSchema)
        ])
    })
    .strict()

export default WebhookUpdateManyWithWhereWithoutProjectInputSchema
