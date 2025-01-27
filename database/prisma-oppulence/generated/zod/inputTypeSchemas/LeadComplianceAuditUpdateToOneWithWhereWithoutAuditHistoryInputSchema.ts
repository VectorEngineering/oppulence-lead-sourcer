import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditWhereInputSchema } from './LeadComplianceAuditWhereInputSchema'
import { LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema'
import { LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema } from './LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema'

export const LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInput> =
    z
        .object({
            where: z.lazy(() => LeadComplianceAuditWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadComplianceAuditUpdateWithoutAuditHistoryInputSchema),
                z.lazy(() => LeadComplianceAuditUncheckedUpdateWithoutAuditHistoryInputSchema)
            ])
        })
        .strict()

export default LeadComplianceAuditUpdateToOneWithWhereWithoutAuditHistoryInputSchema
