import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadComplianceHistoryCreateManyComplianceAuditInputSchema } from './LeadComplianceHistoryCreateManyComplianceAuditInputSchema'

export const LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema: z.ZodType<Prisma.LeadComplianceHistoryCreateManyComplianceAuditInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => LeadComplianceHistoryCreateManyComplianceAuditInputSchema),
                z.lazy(() => LeadComplianceHistoryCreateManyComplianceAuditInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default LeadComplianceHistoryCreateManyComplianceAuditInputEnvelopeSchema
