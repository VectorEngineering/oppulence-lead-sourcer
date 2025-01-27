import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DealMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        pipelineId: z.lazy(() => SortOrderSchema).optional(),
        stageId: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        probability: z.lazy(() => SortOrderSchema).optional(),
        expectedRevenue: z.lazy(() => SortOrderSchema).optional(),
        dealCategory: z.lazy(() => SortOrderSchema).optional(),
        dealFocus: z.lazy(() => SortOrderSchema).optional(),
        synergyPotential: z.lazy(() => SortOrderSchema).optional(),
        synergyDescription: z.lazy(() => SortOrderSchema).optional(),
        complianceCheck: z.lazy(() => SortOrderSchema).optional(),
        complianceNotes: z.lazy(() => SortOrderSchema).optional(),
        estimatedProfitMargin: z.lazy(() => SortOrderSchema).optional(),
        discountReason: z.lazy(() => SortOrderSchema).optional(),
        closingStrategy: z.lazy(() => SortOrderSchema).optional(),
        marketingChannel: z.lazy(() => SortOrderSchema).optional(),
        leadRating: z.lazy(() => SortOrderSchema).optional(),
        startDate: z.lazy(() => SortOrderSchema).optional(),
        closeDate: z.lazy(() => SortOrderSchema).optional(),
        actualCloseDate: z.lazy(() => SortOrderSchema).optional(),
        progress: z.lazy(() => SortOrderSchema).optional(),
        reason: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        assignedToId: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        archivedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        updatedBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealMaxOrderByAggregateInputSchema
