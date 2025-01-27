import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxWhereInputSchema } from './InboxWhereInputSchema'

export const InboxRelationFilterSchema: z.ZodType<Prisma.InboxRelationFilter> = z
    .object({
        is: z.lazy(() => InboxWhereInputSchema).optional(),
        isNot: z.lazy(() => InboxWhereInputSchema).optional()
    })
    .strict()

export default InboxRelationFilterSchema
