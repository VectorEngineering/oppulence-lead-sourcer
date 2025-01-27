import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateManyEndpointInputSchema } from './LeadCreateManyEndpointInputSchema'

export const LeadCreateManyEndpointInputEnvelopeSchema: z.ZodType<Prisma.LeadCreateManyEndpointInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LeadCreateManyEndpointInputSchema), z.lazy(() => LeadCreateManyEndpointInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCreateManyEndpointInputEnvelopeSchema
