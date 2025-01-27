import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadNurturingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadNurturingOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadNurturingOrderByRelationAggregateInputSchema
