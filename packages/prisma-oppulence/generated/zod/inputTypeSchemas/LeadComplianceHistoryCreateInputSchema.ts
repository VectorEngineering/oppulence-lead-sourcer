import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInputSchema } from './LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInputSchema'

export const LeadComplianceHistoryCreateInputSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        action: z.string(),
        status: z.string(),
        notes: z.string(),
        performedBy: z.string(),
        createdAt: z.coerce.date().optional(),
        complianceAudit: z.lazy(() => LeadComplianceAuditCreateNestedOneWithoutAuditHistoryInputSchema)
    })
    .strict()

export default LeadComplianceHistoryCreateInputSchema
