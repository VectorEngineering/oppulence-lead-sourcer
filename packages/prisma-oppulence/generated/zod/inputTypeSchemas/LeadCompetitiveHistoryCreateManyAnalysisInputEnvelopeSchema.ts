import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitiveHistoryCreateManyAnalysisInputSchema } from './LeadCompetitiveHistoryCreateManyAnalysisInputSchema'

export const LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema: z.ZodType<Prisma.LeadCompetitiveHistoryCreateManyAnalysisInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => LeadCompetitiveHistoryCreateManyAnalysisInputSchema),
                z.lazy(() => LeadCompetitiveHistoryCreateManyAnalysisInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default LeadCompetitiveHistoryCreateManyAnalysisInputEnvelopeSchema
