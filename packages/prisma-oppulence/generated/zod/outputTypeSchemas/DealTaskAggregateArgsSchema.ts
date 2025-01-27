import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealTaskWhereInputSchema } from '../inputTypeSchemas/DealTaskWhereInputSchema'
import { DealTaskOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealTaskOrderByWithRelationInputSchema'
import { DealTaskWhereUniqueInputSchema } from '../inputTypeSchemas/DealTaskWhereUniqueInputSchema'

export const DealTaskAggregateArgsSchema: z.ZodType<Prisma.DealTaskAggregateArgs> = z
    .object({
        where: DealTaskWhereInputSchema.optional(),
        orderBy: z.union([DealTaskOrderByWithRelationInputSchema.array(), DealTaskOrderByWithRelationInputSchema]).optional(),
        cursor: DealTaskWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealTaskAggregateArgsSchema
