import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadExternalSystemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadExternalSystemOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadExternalSystemOrderByRelationAggregateInputSchema
