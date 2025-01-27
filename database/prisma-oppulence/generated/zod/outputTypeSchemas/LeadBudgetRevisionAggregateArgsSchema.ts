import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadBudgetRevisionWhereInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereInputSchema'
import { LeadBudgetRevisionOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionOrderByWithRelationInputSchema'
import { LeadBudgetRevisionWhereUniqueInputSchema } from '../inputTypeSchemas/LeadBudgetRevisionWhereUniqueInputSchema'

export const LeadBudgetRevisionAggregateArgsSchema: z.ZodType<Prisma.LeadBudgetRevisionAggregateArgs> = z
    .object({
        where: LeadBudgetRevisionWhereInputSchema.optional(),
        orderBy: z
            .union([LeadBudgetRevisionOrderByWithRelationInputSchema.array(), LeadBudgetRevisionOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadBudgetRevisionWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadBudgetRevisionAggregateArgsSchema
