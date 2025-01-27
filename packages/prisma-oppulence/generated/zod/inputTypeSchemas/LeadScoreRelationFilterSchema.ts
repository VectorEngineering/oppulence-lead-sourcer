import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreWhereInputSchema } from './LeadScoreWhereInputSchema'

export const LeadScoreRelationFilterSchema: z.ZodType<Prisma.LeadScoreRelationFilter> = z
    .object({
        is: z.lazy(() => LeadScoreWhereInputSchema).optional(),
        isNot: z.lazy(() => LeadScoreWhereInputSchema).optional()
    })
    .strict()

export default LeadScoreRelationFilterSchema
