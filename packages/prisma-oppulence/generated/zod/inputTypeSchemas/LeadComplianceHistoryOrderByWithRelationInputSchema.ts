import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LeadComplianceAuditOrderByWithRelationInputSchema } from './LeadComplianceAuditOrderByWithRelationInputSchema'
import { LeadComplianceHistoryOrderByRelevanceInputSchema } from './LeadComplianceHistoryOrderByRelevanceInputSchema'

export const LeadComplianceHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadComplianceHistoryOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        complianceAuditId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        performedBy: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        complianceAudit: z.lazy(() => LeadComplianceAuditOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadComplianceHistoryOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadComplianceHistoryOrderByWithRelationInputSchema
