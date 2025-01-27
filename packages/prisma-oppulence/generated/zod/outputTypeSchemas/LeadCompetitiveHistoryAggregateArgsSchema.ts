import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveHistoryWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereInputSchema'
import { LeadCompetitiveHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryOrderByWithRelationInputSchema'
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereUniqueInputSchema'

export const LeadCompetitiveHistoryAggregateArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryAggregateArgs> = z
    .object({
        where: LeadCompetitiveHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([LeadCompetitiveHistoryOrderByWithRelationInputSchema.array(), LeadCompetitiveHistoryOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadCompetitiveHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadCompetitiveHistoryAggregateArgsSchema
