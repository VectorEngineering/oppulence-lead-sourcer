import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommentWhereInputSchema } from '../inputTypeSchemas/LeadCommentWhereInputSchema'
import { LeadCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCommentOrderByWithAggregationInputSchema'
import { LeadCommentScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCommentScalarFieldEnumSchema'
import { LeadCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCommentScalarWhereWithAggregatesInputSchema'

export const LeadCommentGroupByArgsSchema: z.ZodType<Prisma.LeadCommentGroupByArgs> = z
    .object({
        where: LeadCommentWhereInputSchema.optional(),
        orderBy: z.union([LeadCommentOrderByWithAggregationInputSchema.array(), LeadCommentOrderByWithAggregationInputSchema]).optional(),
        by: LeadCommentScalarFieldEnumSchema.array(),
        having: LeadCommentScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadCommentGroupByArgsSchema
