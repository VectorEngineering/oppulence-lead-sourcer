import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadNurturingSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadNurturingSumOrderByAggregateInput> = z
    .object({
        engagementScore: z.lazy(() => SortOrderSchema).optional(),
        responseRate: z.lazy(() => SortOrderSchema).optional(),
        currentStep: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadNurturingSumOrderByAggregateInputSchema
