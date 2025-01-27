import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema'

export const LeadProductFitListRelationFilterSchema: z.ZodType<Prisma.LeadProductFitListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadProductFitWhereInputSchema).optional(),
        some: z.lazy(() => LeadProductFitWhereInputSchema).optional(),
        none: z.lazy(() => LeadProductFitWhereInputSchema).optional()
    })
    .strict()

export default LeadProductFitListRelationFilterSchema
