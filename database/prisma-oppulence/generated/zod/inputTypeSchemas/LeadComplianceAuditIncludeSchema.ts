import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'
import { LeadComplianceHistoryFindManyArgsSchema } from '../outputTypeSchemas/LeadComplianceHistoryFindManyArgsSchema'
import { LeadComplianceAuditCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadComplianceAuditCountOutputTypeArgsSchema'

export const LeadComplianceAuditIncludeSchema: z.ZodType<Prisma.LeadComplianceAuditInclude> = z
    .object({
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        auditHistory: z.union([z.boolean(), z.lazy(() => LeadComplianceHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadComplianceAuditCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadComplianceAuditIncludeSchema
