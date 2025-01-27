import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateManyLeadInputSchema } from './DealCreateManyLeadInputSchema'

export const DealCreateManyLeadInputEnvelopeSchema: z.ZodType<Prisma.DealCreateManyLeadInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealCreateManyLeadInputSchema), z.lazy(() => DealCreateManyLeadInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCreateManyLeadInputEnvelopeSchema
