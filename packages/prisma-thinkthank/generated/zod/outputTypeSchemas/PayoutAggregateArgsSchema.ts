import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutWhereInputSchema } from '../inputTypeSchemas/PayoutWhereInputSchema'
import { PayoutOrderByWithRelationInputSchema } from '../inputTypeSchemas/PayoutOrderByWithRelationInputSchema'
import { PayoutWhereUniqueInputSchema } from '../inputTypeSchemas/PayoutWhereUniqueInputSchema'

export const PayoutAggregateArgsSchema: z.ZodType<Prisma.PayoutAggregateArgs> = z
    .object({
        where: PayoutWhereInputSchema.optional(),
        orderBy: z.union([PayoutOrderByWithRelationInputSchema.array(), PayoutOrderByWithRelationInputSchema]).optional(),
        cursor: PayoutWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PayoutAggregateArgsSchema
