import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CustomerTagWhereInputSchema } from '../inputTypeSchemas/CustomerTagWhereInputSchema'
import { CustomerTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/CustomerTagOrderByWithRelationInputSchema'
import { CustomerTagWhereUniqueInputSchema } from '../inputTypeSchemas/CustomerTagWhereUniqueInputSchema'

export const CustomerTagAggregateArgsSchema: z.ZodType<Prisma.CustomerTagAggregateArgs> = z
    .object({
        where: CustomerTagWhereInputSchema.optional(),
        orderBy: z.union([CustomerTagOrderByWithRelationInputSchema.array(), CustomerTagOrderByWithRelationInputSchema]).optional(),
        cursor: CustomerTagWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default CustomerTagAggregateArgsSchema
