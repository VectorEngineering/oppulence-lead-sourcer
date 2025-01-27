import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxShareWhereInputSchema } from './InboxShareWhereInputSchema'

export const InboxShareListRelationFilterSchema: z.ZodType<Prisma.InboxShareListRelationFilter> = z
    .object({
        every: z.lazy(() => InboxShareWhereInputSchema).optional(),
        some: z.lazy(() => InboxShareWhereInputSchema).optional(),
        none: z.lazy(() => InboxShareWhereInputSchema).optional()
    })
    .strict()

export default InboxShareListRelationFilterSchema
