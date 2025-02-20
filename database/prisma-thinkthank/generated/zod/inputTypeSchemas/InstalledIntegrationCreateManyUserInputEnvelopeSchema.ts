import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateManyUserInputSchema } from './InstalledIntegrationCreateManyUserInputSchema'

export const InstalledIntegrationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyUserInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => InstalledIntegrationCreateManyUserInputSchema),
            z.lazy(() => InstalledIntegrationCreateManyUserInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InstalledIntegrationCreateManyUserInputEnvelopeSchema
