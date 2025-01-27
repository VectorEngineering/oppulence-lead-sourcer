import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetWhereInputSchema } from '../inputTypeSchemas/LeadBudgetWhereInputSchema'
import { LeadBudgetOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetOrderByWithRelationInputSchema'
import { LeadBudgetWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetWhereUniqueInputSchema'

export const LeadBudgetAggregateArgsSchema: z.ZodType<Prisma.LeadBudgetAggregateArgs> = z
    .object({
        where: LeadBudgetWhereInputSchema.optional(),
        orderBy: z.union([LeadBudgetOrderByWithRelationInputSchema.array(), LeadBudgetOrderByWithRelationInputSchema]).optional(),
        cursor: LeadBudgetWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadBudgetAggregateArgsSchema
