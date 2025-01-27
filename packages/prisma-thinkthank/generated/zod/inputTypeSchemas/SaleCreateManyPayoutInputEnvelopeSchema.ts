import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleCreateManyPayoutInputSchema } from './SaleCreateManyPayoutInputSchema'

export const SaleCreateManyPayoutInputEnvelopeSchema: z.ZodType<Prisma.SaleCreateManyPayoutInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => SaleCreateManyPayoutInputSchema), z.lazy(() => SaleCreateManyPayoutInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default SaleCreateManyPayoutInputEnvelopeSchema
