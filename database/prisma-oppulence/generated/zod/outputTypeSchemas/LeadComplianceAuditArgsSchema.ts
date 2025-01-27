import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadComplianceAuditSelectSchema } from '../inputTypeSchemas/LeadComplianceAuditSelectSchema'
import { LeadComplianceAuditIncludeSchema } from '../inputTypeSchemas/LeadComplianceAuditIncludeSchema'

export const LeadComplianceAuditArgsSchema: z.ZodType<Prisma.LeadComplianceAuditDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadComplianceAuditSelectSchema).optional(),
        include: z.lazy(() => LeadComplianceAuditIncludeSchema).optional()
    })
    .strict()

export default LeadComplianceAuditArgsSchema
