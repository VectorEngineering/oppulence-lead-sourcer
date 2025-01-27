import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadComplianceHistoryUncheckedCreateInputSchema: z.ZodType<Prisma.LeadComplianceHistoryUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        complianceAuditId: z.string(),
        action: z.string(),
        status: z.string(),
        notes: z.string(),
        performedBy: z.string(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default LeadComplianceHistoryUncheckedCreateInputSchema
