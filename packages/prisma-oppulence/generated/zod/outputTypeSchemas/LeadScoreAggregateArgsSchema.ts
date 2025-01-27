import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadScoreWhereInputSchema } from '../inputTypeSchemas/LeadScoreWhereInputSchema'
import { LeadScoreOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadScoreOrderByWithRelationInputSchema'
import { LeadScoreWhereUniqueInputSchema } from '../inputTypeSchemas/LeadScoreWhereUniqueInputSchema'

export const LeadScoreAggregateArgsSchema: z.ZodType<Prisma.LeadScoreAggregateArgs> = z
    .object({
        where: LeadScoreWhereInputSchema.optional(),
        orderBy: z.union([LeadScoreOrderByWithRelationInputSchema.array(), LeadScoreOrderByWithRelationInputSchema]).optional(),
        cursor: LeadScoreWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadScoreAggregateArgsSchema
