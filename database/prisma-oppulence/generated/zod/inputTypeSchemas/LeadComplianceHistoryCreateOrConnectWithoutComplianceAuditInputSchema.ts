import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceHistoryWhereUniqueInputSchema } from './LeadComplianceHistoryWhereUniqueInputSchema'
import { LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema'
import { LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema } from './LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema'

export const LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInput> =
    z
        .object({
            where: z.lazy(() => LeadComplianceHistoryWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadComplianceHistoryCreateWithoutComplianceAuditInputSchema),
                z.lazy(() => LeadComplianceHistoryUncheckedCreateWithoutComplianceAuditInputSchema)
            ])
        })
        .strict()

export default LeadComplianceHistoryCreateOrConnectWithoutComplianceAuditInputSchema
