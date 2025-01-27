import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealProductCreateManyDealInputSchema } from './DealProductCreateManyDealInputSchema'

export const DealProductCreateManyDealInputEnvelopeSchema: z.ZodType<Prisma.DealProductCreateManyDealInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DealProductCreateManyDealInputSchema), z.lazy(() => DealProductCreateManyDealInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealProductCreateManyDealInputEnvelopeSchema
