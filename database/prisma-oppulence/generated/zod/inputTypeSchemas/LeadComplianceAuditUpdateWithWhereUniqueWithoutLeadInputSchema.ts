import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceAuditWhereUniqueInputSchema } from './LeadComplianceAuditWhereUniqueInputSchema'
import { LeadComplianceAuditUpdateWithoutLeadInputSchema } from './LeadComplianceAuditUpdateWithoutLeadInputSchema'
import { LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema } from './LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema'

export const LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadComplianceAuditWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadComplianceAuditUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadComplianceAuditUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadComplianceAuditUpdateWithWhereUniqueWithoutLeadInputSchema
