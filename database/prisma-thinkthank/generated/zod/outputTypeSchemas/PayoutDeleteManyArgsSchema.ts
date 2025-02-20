import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutWhereInputSchema } from '../inputTypeSchemas/PayoutWhereInputSchema'

export const PayoutDeleteManyArgsSchema: z.ZodType<Prisma.PayoutDeleteManyArgs> = z
    .object({
        where: PayoutWhereInputSchema.optional()
    })
    .strict()

export default PayoutDeleteManyArgsSchema
