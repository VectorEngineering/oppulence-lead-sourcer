import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealActivityWhereInputSchema } from '../inputTypeSchemas/DealActivityWhereInputSchema'
import { DealActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealActivityOrderByWithRelationInputSchema'
import { DealActivityWhereUniqueInputSchema } from '../inputTypeSchemas/DealActivityWhereUniqueInputSchema'

export const DealActivityAggregateArgsSchema: z.ZodType<Prisma.DealActivityAggregateArgs> = z
    .object({
        where: DealActivityWhereInputSchema.optional(),
        orderBy: z.union([DealActivityOrderByWithRelationInputSchema.array(), DealActivityOrderByWithRelationInputSchema]).optional(),
        cursor: DealActivityWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealActivityAggregateArgsSchema
