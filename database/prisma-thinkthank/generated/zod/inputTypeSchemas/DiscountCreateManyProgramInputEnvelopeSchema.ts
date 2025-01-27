import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DiscountCreateManyProgramInputSchema } from './DiscountCreateManyProgramInputSchema'

export const DiscountCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.DiscountCreateManyProgramInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => DiscountCreateManyProgramInputSchema), z.lazy(() => DiscountCreateManyProgramInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DiscountCreateManyProgramInputEnvelopeSchema
