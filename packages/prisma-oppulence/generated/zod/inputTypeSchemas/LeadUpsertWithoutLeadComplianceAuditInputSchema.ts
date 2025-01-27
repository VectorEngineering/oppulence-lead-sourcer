import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUpdateWithoutLeadComplianceAuditInputSchema'
import { LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema'
import { LeadCreateWithoutLeadComplianceAuditInputSchema } from './LeadCreateWithoutLeadComplianceAuditInputSchema'
import { LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema } from './LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutLeadComplianceAuditInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadComplianceAuditInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutLeadComplianceAuditInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutLeadComplianceAuditInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadComplianceAuditInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadComplianceAuditInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutLeadComplianceAuditInputSchema
