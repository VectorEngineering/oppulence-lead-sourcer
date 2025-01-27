import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveAnalysisCreateManyLeadInputSchema } from './LeadCompetitiveAnalysisCreateManyLeadInputSchema'

export const LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCreateManyLeadInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => LeadCompetitiveAnalysisCreateManyLeadInputSchema),
                z.lazy(() => LeadCompetitiveAnalysisCreateManyLeadInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default LeadCompetitiveAnalysisCreateManyLeadInputEnvelopeSchema
