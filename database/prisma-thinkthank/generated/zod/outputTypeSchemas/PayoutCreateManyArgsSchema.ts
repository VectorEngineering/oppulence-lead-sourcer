import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutCreateManyInputSchema } from '../inputTypeSchemas/PayoutCreateManyInputSchema'

export const PayoutCreateManyArgsSchema: z.ZodType<Prisma.PayoutCreateManyArgs> = z
    .object({
        data: z.union([PayoutCreateManyInputSchema, PayoutCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PayoutCreateManyArgsSchema
