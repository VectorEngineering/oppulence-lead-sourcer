import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadContactPreferenceWhereInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereInputSchema'
import { LeadContactPreferenceOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadContactPreferenceOrderByWithRelationInputSchema'
import { LeadContactPreferenceWhereUniqueInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereUniqueInputSchema'

export const LeadContactPreferenceAggregateArgsSchema: z.ZodType<Prisma.LeadContactPreferenceAggregateArgs> = z
    .object({
        where: LeadContactPreferenceWhereInputSchema.optional(),
        orderBy: z
            .union([LeadContactPreferenceOrderByWithRelationInputSchema.array(), LeadContactPreferenceOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadContactPreferenceWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadContactPreferenceAggregateArgsSchema
