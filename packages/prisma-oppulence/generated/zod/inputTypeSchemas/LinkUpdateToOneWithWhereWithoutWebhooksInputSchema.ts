import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { LinkUpdateWithoutWebhooksInputSchema } from './LinkUpdateWithoutWebhooksInputSchema'
import { LinkUncheckedUpdateWithoutWebhooksInputSchema } from './LinkUncheckedUpdateWithoutWebhooksInputSchema'

export const LinkUpdateToOneWithWhereWithoutWebhooksInputSchema: z.ZodType<Prisma.LinkUpdateToOneWithWhereWithoutWebhooksInput> = z
    .object({
        where: z.lazy(() => LinkWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LinkUpdateWithoutWebhooksInputSchema), z.lazy(() => LinkUncheckedUpdateWithoutWebhooksInputSchema)])
    })
    .strict()

export default LinkUpdateToOneWithWhereWithoutWebhooksInputSchema
