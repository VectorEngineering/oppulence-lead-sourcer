import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadNurturingMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadNurturingMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        program: z.lazy(() => SortOrderSchema).optional(),
        stage: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        engagementScore: z.lazy(() => SortOrderSchema).optional(),
        responseRate: z.lazy(() => SortOrderSchema).optional(),
        lastEngagement: z.lazy(() => SortOrderSchema).optional(),
        currentStep: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadNurturingMinOrderByAggregateInputSchema
