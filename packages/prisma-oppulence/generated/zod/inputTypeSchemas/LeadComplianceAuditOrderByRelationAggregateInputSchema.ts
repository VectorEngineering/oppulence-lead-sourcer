import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadComplianceAuditOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadComplianceAuditOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadComplianceAuditOrderByRelationAggregateInputSchema
