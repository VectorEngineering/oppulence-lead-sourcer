import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateManyInstalledIntegrationInputSchema } from './RestrictedTokenCreateManyInstalledIntegrationInputSchema'

export const RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema: z.ZodType<Prisma.RestrictedTokenCreateManyInstalledIntegrationInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => RestrictedTokenCreateManyInstalledIntegrationInputSchema),
                z.lazy(() => RestrictedTokenCreateManyInstalledIntegrationInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default RestrictedTokenCreateManyInstalledIntegrationInputEnvelopeSchema
