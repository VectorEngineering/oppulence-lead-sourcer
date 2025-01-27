import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadHistoryWhereInputSchema } from '../inputTypeSchemas/LeadHistoryWhereInputSchema'
import { LeadHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadHistoryOrderByWithRelationInputSchema'
import { LeadHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadHistoryWhereUniqueInputSchema'

export const LeadHistoryAggregateArgsSchema: z.ZodType<Prisma.LeadHistoryAggregateArgs> = z
    .object({
        where: LeadHistoryWhereInputSchema.optional(),
        orderBy: z.union([LeadHistoryOrderByWithRelationInputSchema.array(), LeadHistoryOrderByWithRelationInputSchema]).optional(),
        cursor: LeadHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadHistoryAggregateArgsSchema
