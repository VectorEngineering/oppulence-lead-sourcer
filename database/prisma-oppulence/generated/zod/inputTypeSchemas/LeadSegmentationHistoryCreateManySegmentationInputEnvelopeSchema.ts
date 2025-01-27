import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationHistoryCreateManySegmentationInputSchema } from './LeadSegmentationHistoryCreateManySegmentationInputSchema'

export const LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema: z.ZodType<Prisma.LeadSegmentationHistoryCreateManySegmentationInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => LeadSegmentationHistoryCreateManySegmentationInputSchema),
                z.lazy(() => LeadSegmentationHistoryCreateManySegmentationInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default LeadSegmentationHistoryCreateManySegmentationInputEnvelopeSchema
