import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRiskWhereInputSchema } from './LeadRiskWhereInputSchema'

export const LeadRiskListRelationFilterSchema: z.ZodType<Prisma.LeadRiskListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadRiskWhereInputSchema).optional(),
        some: z.lazy(() => LeadRiskWhereInputSchema).optional(),
        none: z.lazy(() => LeadRiskWhereInputSchema).optional()
    })
    .strict()

export default LeadRiskListRelationFilterSchema
