import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { EndpointCreateManyUserInputSchema } from './EndpointCreateManyUserInputSchema'

export const EndpointCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.EndpointCreateManyUserInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => EndpointCreateManyUserInputSchema), z.lazy(() => EndpointCreateManyUserInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default EndpointCreateManyUserInputEnvelopeSchema
