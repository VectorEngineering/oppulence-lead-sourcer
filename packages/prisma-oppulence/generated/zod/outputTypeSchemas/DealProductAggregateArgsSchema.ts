import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealProductWhereInputSchema } from '../inputTypeSchemas/DealProductWhereInputSchema'
import { DealProductOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealProductOrderByWithRelationInputSchema'
import { DealProductWhereUniqueInputSchema } from '../inputTypeSchemas/DealProductWhereUniqueInputSchema'

export const DealProductAggregateArgsSchema: z.ZodType<Prisma.DealProductAggregateArgs> = z
    .object({
        where: DealProductWhereInputSchema.optional(),
        orderBy: z.union([DealProductOrderByWithRelationInputSchema.array(), DealProductOrderByWithRelationInputSchema]).optional(),
        cursor: DealProductWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealProductAggregateArgsSchema
