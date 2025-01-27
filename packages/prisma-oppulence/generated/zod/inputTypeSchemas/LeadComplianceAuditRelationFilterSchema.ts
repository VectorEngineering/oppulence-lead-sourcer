import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema'

export const LeadComplianceAuditRelationFilterSchema: z.ZodType<Prisma.LeadComplianceAuditRelationFilter> = z
    .object({
        is: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional(),
        isNot: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional()
    })
    .strict()

export default LeadComplianceAuditRelationFilterSchema
