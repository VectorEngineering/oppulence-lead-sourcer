import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateManyProjectInputSchema } from './RestrictedTokenCreateManyProjectInputSchema'

export const RestrictedTokenCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.RestrictedTokenCreateManyProjectInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => RestrictedTokenCreateManyProjectInputSchema),
            z.lazy(() => RestrictedTokenCreateManyProjectInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default RestrictedTokenCreateManyProjectInputEnvelopeSchema
