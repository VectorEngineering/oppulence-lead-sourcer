import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateManyProjectInputSchema } from './DealCreateManyProjectInputSchema'

export const DealCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.DealCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealCreateManyProjectInputSchema), z.lazy(() => DealCreateManyProjectInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCreateManyProjectInputEnvelopeSchema
