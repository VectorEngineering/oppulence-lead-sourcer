import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealActivityCreateManyDealInputSchema } from './DealActivityCreateManyDealInputSchema'

export const DealActivityCreateManyDealInputEnvelopeSchema: z.ZodType<Prisma.DealActivityCreateManyDealInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealActivityCreateManyDealInputSchema), z.lazy(() => DealActivityCreateManyDealInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealActivityCreateManyDealInputEnvelopeSchema
