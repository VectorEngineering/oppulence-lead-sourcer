import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommentWhereInputSchema } from '../inputTypeSchemas/LeadCommentWhereInputSchema'
import { LeadCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCommentOrderByWithRelationInputSchema'
import { LeadCommentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommentWhereUniqueInputSchema'

export const LeadCommentAggregateArgsSchema: z.ZodType<Prisma.LeadCommentAggregateArgs> = z
    .object({
        where: LeadCommentWhereInputSchema.optional(),
        orderBy: z.union([LeadCommentOrderByWithRelationInputSchema.array(), LeadCommentOrderByWithRelationInputSchema]).optional(),
        cursor: LeadCommentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadCommentAggregateArgsSchema
