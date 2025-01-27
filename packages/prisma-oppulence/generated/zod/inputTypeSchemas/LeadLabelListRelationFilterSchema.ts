import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadLabelWhereInputSchema } from './LeadLabelWhereInputSchema'

export const LeadLabelListRelationFilterSchema: z.ZodType<Prisma.LeadLabelListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadLabelWhereInputSchema).optional(),
        some: z.lazy(() => LeadLabelWhereInputSchema).optional(),
        none: z.lazy(() => LeadLabelWhereInputSchema).optional()
    })
    .strict()

export default LeadLabelListRelationFilterSchema
