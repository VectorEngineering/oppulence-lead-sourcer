import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityWhereInputSchema } from './InboxActivityWhereInputSchema'

export const InboxActivityListRelationFilterSchema: z.ZodType<Prisma.InboxActivityListRelationFilter> = z
    .object({
        every: z.lazy(() => InboxActivityWhereInputSchema).optional(),
        some: z.lazy(() => InboxActivityWhereInputSchema).optional(),
        none: z.lazy(() => InboxActivityWhereInputSchema).optional()
    })
    .strict()

export default InboxActivityListRelationFilterSchema
