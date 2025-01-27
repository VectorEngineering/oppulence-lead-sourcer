import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const LeadComplianceAuditCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadComplianceAuditCountOutputTypeSelect> = z
    .object({
        auditHistory: z.boolean().optional()
    })
    .strict()

export default LeadComplianceAuditCountOutputTypeSelectSchema
