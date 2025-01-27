import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LeadComplianceHistoryCountOrderByAggregateInputSchema } from './LeadComplianceHistoryCountOrderByAggregateInputSchema'
import { LeadComplianceHistoryMaxOrderByAggregateInputSchema } from './LeadComplianceHistoryMaxOrderByAggregateInputSchema'
import { LeadComplianceHistoryMinOrderByAggregateInputSchema } from './LeadComplianceHistoryMinOrderByAggregateInputSchema'

export const LeadComplianceHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadComplianceHistoryOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        complianceAuditId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        performedBy: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadComplianceHistoryCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadComplianceHistoryMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadComplianceHistoryMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadComplianceHistoryOrderByWithAggregationInputSchema
