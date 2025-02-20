import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InstalledIntegrationCreateManyIntegrationInputSchema } from './InstalledIntegrationCreateManyIntegrationInputSchema'

export const InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyIntegrationInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => InstalledIntegrationCreateManyIntegrationInputSchema),
                z.lazy(() => InstalledIntegrationCreateManyIntegrationInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default InstalledIntegrationCreateManyIntegrationInputEnvelopeSchema
