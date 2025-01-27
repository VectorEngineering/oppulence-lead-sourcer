import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadHistoryWhereInputSchema } from './LeadHistoryWhereInputSchema'

export const LeadHistoryListRelationFilterSchema: z.ZodType<Prisma.LeadHistoryListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadHistoryWhereInputSchema).optional(),
        some: z.lazy(() => LeadHistoryWhereInputSchema).optional(),
        none: z.lazy(() => LeadHistoryWhereInputSchema).optional()
    })
    .strict()

export default LeadHistoryListRelationFilterSchema
