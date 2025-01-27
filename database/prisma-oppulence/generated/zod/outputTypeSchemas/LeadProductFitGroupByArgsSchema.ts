import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitWhereInputSchema } from '../inputTypeSchemas/LeadProductFitWhereInputSchema'
import { LeadProductFitOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadProductFitOrderByWithAggregationInputSchema'
import { LeadProductFitScalarFieldEnumSchema } from '../inputTypeSchemas/LeadProductFitScalarFieldEnumSchema'
import { LeadProductFitScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadProductFitScalarWhereWithAggregatesInputSchema'

export const LeadProductFitGroupByArgsSchema: z.ZodType<Prisma.LeadProductFitGroupByArgs> = z
    .object({
        where: LeadProductFitWhereInputSchema.optional(),
        orderBy: z
            .union([LeadProductFitOrderByWithAggregationInputSchema.array(), LeadProductFitOrderByWithAggregationInputSchema])
            .optional(),
        by: LeadProductFitScalarFieldEnumSchema.array(),
        having: LeadProductFitScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadProductFitGroupByArgsSchema
