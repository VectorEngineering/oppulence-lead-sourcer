import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUpdateWithoutLeadComplianceAuditInputSchema'
import { LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema'

export const LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInput> =
    z
        .object({
            where: z.lazy(() => LeadWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadUpdateWithoutLeadComplianceAuditInputSchema),
                z.lazy(() => LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema)
            ])
        })
        .strict()

export default LeadUpdateToOneWithWhereWithoutLeadComplianceAuditInputSchema
