import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitWhereInputSchema } from '../inputTypeSchemas/LeadProductFitWhereInputSchema'
import { LeadProductFitOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadProductFitOrderByWithRelationInputSchema'
import { LeadProductFitWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitWhereUniqueInputSchema'

export const LeadProductFitAggregateArgsSchema: z.ZodType<Prisma.LeadProductFitAggregateArgs> = z
    .object({
        where: LeadProductFitWhereInputSchema.optional(),
        orderBy: z.union([LeadProductFitOrderByWithRelationInputSchema.array(), LeadProductFitOrderByWithRelationInputSchema]).optional(),
        cursor: LeadProductFitWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadProductFitAggregateArgsSchema
