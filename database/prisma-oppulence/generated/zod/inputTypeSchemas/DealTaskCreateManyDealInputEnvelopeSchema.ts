import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateManyDealInputSchema } from './DealTaskCreateManyDealInputSchema'

export const DealTaskCreateManyDealInputEnvelopeSchema: z.ZodType<Prisma.DealTaskCreateManyDealInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealTaskCreateManyDealInputSchema), z.lazy(() => DealTaskCreateManyDealInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealTaskCreateManyDealInputEnvelopeSchema
