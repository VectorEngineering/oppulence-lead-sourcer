import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateManyProjectInputSchema } from './LeadCreateManyProjectInputSchema'

export const LeadCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.LeadCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadCreateManyProjectInputSchema), z.lazy(() => LeadCreateManyProjectInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCreateManyProjectInputEnvelopeSchema
