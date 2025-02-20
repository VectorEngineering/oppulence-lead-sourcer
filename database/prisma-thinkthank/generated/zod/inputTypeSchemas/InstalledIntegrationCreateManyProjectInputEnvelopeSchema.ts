import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateManyProjectInputSchema } from './InstalledIntegrationCreateManyProjectInputSchema'

export const InstalledIntegrationCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyProjectInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => InstalledIntegrationCreateManyProjectInputSchema),
                z.lazy(() => InstalledIntegrationCreateManyProjectInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default InstalledIntegrationCreateManyProjectInputEnvelopeSchema
