import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateManyPipelineInputSchema } from './DealCreateManyPipelineInputSchema'

export const DealCreateManyPipelineInputEnvelopeSchema: z.ZodType<Prisma.DealCreateManyPipelineInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealCreateManyPipelineInputSchema), z.lazy(() => DealCreateManyPipelineInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCreateManyPipelineInputEnvelopeSchema
