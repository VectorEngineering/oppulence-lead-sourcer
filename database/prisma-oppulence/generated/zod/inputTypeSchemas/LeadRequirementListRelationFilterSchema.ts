import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRequirementWhereInputSchema } from './LeadRequirementWhereInputSchema'

export const LeadRequirementListRelationFilterSchema: z.ZodType<Prisma.LeadRequirementListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadRequirementWhereInputSchema).optional(),
        some: z.lazy(() => LeadRequirementWhereInputSchema).optional(),
        none: z.lazy(() => LeadRequirementWhereInputSchema).optional()
    })
    .strict()

export default LeadRequirementListRelationFilterSchema
