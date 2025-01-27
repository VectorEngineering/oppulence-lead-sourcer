import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealHistoryCreateManyDealInputSchema } from './DealHistoryCreateManyDealInputSchema'

export const DealHistoryCreateManyDealInputEnvelopeSchema: z.ZodType<Prisma.DealHistoryCreateManyDealInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealHistoryCreateManyDealInputSchema), z.lazy(() => DealHistoryCreateManyDealInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealHistoryCreateManyDealInputEnvelopeSchema
