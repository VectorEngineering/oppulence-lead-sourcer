import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitorWhereInputSchema } from './LeadCompetitorWhereInputSchema'

export const LeadCompetitorListRelationFilterSchema: z.ZodType<Prisma.LeadCompetitorListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadCompetitorWhereInputSchema).optional(),
        some: z.lazy(() => LeadCompetitorWhereInputSchema).optional(),
        none: z.lazy(() => LeadCompetitorWhereInputSchema).optional()
    })
    .strict()

export default LeadCompetitorListRelationFilterSchema
