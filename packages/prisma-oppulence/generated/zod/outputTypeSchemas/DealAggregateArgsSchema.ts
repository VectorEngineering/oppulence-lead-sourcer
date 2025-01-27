import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealWhereInputSchema } from '../inputTypeSchemas/DealWhereInputSchema'
import { DealOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealOrderByWithRelationInputSchema'
import { DealWhereUniqueInputSchema } from '../inputTypeSchemas/DealWhereUniqueInputSchema'

export const DealAggregateArgsSchema: z.ZodType<Prisma.DealAggregateArgs> = z
    .object({
        where: DealWhereInputSchema.optional(),
        orderBy: z.union([DealOrderByWithRelationInputSchema.array(), DealOrderByWithRelationInputSchema]).optional(),
        cursor: DealWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealAggregateArgsSchema
