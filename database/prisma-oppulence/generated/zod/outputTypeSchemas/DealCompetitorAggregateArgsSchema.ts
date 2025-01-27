import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCompetitorWhereInputSchema } from '../inputTypeSchemas/DealCompetitorWhereInputSchema'
import { DealCompetitorOrderByWithRelationInputSchema } from '../inputTypeSchemas/DealCompetitorOrderByWithRelationInputSchema'
import { DealCompetitorWhereUniqueInputSchema } from '../inputTypeSchemas/DealCompetitorWhereUniqueInputSchema'

export const DealCompetitorAggregateArgsSchema: z.ZodType<Prisma.DealCompetitorAggregateArgs> = z
    .object({
        where: DealCompetitorWhereInputSchema.optional(),
        orderBy: z.union([DealCompetitorOrderByWithRelationInputSchema.array(), DealCompetitorOrderByWithRelationInputSchema]).optional(),
        cursor: DealCompetitorWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DealCompetitorAggregateArgsSchema
