import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateManyAssignedToInputSchema } from './DealCreateManyAssignedToInputSchema'

export const DealCreateManyAssignedToInputEnvelopeSchema: z.ZodType<Prisma.DealCreateManyAssignedToInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealCreateManyAssignedToInputSchema), z.lazy(() => DealCreateManyAssignedToInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCreateManyAssignedToInputEnvelopeSchema
