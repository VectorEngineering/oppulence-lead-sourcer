import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryWhereInputSchema } from '../inputTypeSchemas/LeadCategoryWhereInputSchema'
import { LeadCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCategoryOrderByWithRelationInputSchema'
import { LeadCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCategoryWhereUniqueInputSchema'

export const LeadCategoryAggregateArgsSchema: z.ZodType<Prisma.LeadCategoryAggregateArgs> = z
    .object({
        where: LeadCategoryWhereInputSchema.optional(),
        orderBy: z.union([LeadCategoryOrderByWithRelationInputSchema.array(), LeadCategoryOrderByWithRelationInputSchema]).optional(),
        cursor: LeadCategoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadCategoryAggregateArgsSchema
