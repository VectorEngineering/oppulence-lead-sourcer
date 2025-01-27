import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealHistoryWhereInputSchema } from '../inputTypeSchemas/DealHistoryWhereInputSchema'
import { DealHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealHistoryOrderByWithRelationInputSchema'
import { DealHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/DealHistoryWhereUniqueInputSchema'

export const DealHistoryAggregateArgsSchema: z.ZodType<Prisma.DealHistoryAggregateArgs> = z
    .object({
        where: DealHistoryWhereInputSchema.optional(),
        orderBy: z.union([DealHistoryOrderByWithRelationInputSchema.array(), DealHistoryOrderByWithRelationInputSchema]).optional(),
        cursor: DealHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealHistoryAggregateArgsSchema
