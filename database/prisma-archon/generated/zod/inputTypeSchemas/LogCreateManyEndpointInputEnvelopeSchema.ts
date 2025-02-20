import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogCreateManyEndpointInputSchema } from './LogCreateManyEndpointInputSchema'

export const LogCreateManyEndpointInputEnvelopeSchema: z.ZodType<Prisma.LogCreateManyEndpointInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LogCreateManyEndpointInputSchema), z.lazy(() => LogCreateManyEndpointInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LogCreateManyEndpointInputEnvelopeSchema
